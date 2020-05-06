/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Span } from '@opentelemetry/api';
import { SpanProcessor } from '@opentelemetry/tracing';

/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */
export class MultiSpanProcessor implements SpanProcessor {
  private _spanProcessors: SpanProcessor[] = []
  constructor() {}

  addSpanProcessor(spanProcessor: SpanProcessor) {
    this._spanProcessors.push(spanProcessor)
  }

  forceFlush(): void {
    for (const spanProcessor of this._spanProcessors) {
      spanProcessor.forceFlush()
    }
  }

  onStart(span: Span): void {
    for (const spanProcessor of this._spanProcessors) {
      spanProcessor.onStart(span);
    }
  }

  onEnd(span: Span): void {
    for (const spanProcessor of this._spanProcessors) {
      spanProcessor.onEnd(span);
    }
  }

  shutdown(): void {
    for (const spanProcessor of this._spanProcessors) {
      spanProcessor.shutdown();
    }
  }
}
