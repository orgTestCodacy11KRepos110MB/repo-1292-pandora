// 放在前面，把 http.ClientRequest 先复写
import * as nock from 'nock';
import { Fixture, sleep, request } from '../../TestUtil';
import { HttpServerPatcher, HttpClientPatcher } from '../../../src/patchers';
import * as sinon from 'sinon';
import * as assert from 'assert';
import { consoleLogger } from 'pandora-dollar';

export default class HttpClientFixture extends Fixture {

  config() {

    return {
      patchers: {
        httpServer: {
          enabled: true,
          klass: HttpServerPatcher
        },
        httpClient: {
          enabled: true,
          klass: HttpClientPatcher
        }
      }
    };
  }

  async case(done) {
    const http = require('http');

    nock('http://www.taobao.com')
      .get('/')
      .reply(200);

    const spy = sinon.spy(consoleLogger, 'info');
    const httpClientPatcher = this.autoPatching.instances.get('httpClient');
    const stub = sinon.stub(httpClientPatcher, 'tracer').value(null);

    const server = http.createServer(function(req, res) {
      setTimeout(() => {
        request(http, {
          hostname: 'www.taobao.com',
          path: '/',
          method: 'GET'
        }).then(() => {
          assert(spy.calledWith('[HttpClientPatcher] no tracer, skip trace.'));
          stub.restore();
          spy.restore();
          done();
          res.end('OK');
        });
      },  Math.floor(1 + Math.random() * 10) * 100);
    });

    server.listen(0);

    sleep(1000);

    const port = server.address().port;

    await request(http, {
      hostname: 'localhost',
      port: port,
      path: '/',
      method: 'GET',
      headers: {
        'X-Trace-Id': '1234567890'
      }
    });
  }
}