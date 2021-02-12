/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BuildMetadataStorage } from './BuildMetadataStorage';

describe('BuildMetadataStorage', () => {
  it('should return build timestamp', () => {
    const newMetadataStorage = new BuildMetadataStorage('entityID123abc');
    newMetadataStorage.setEtag('etag123abc');

    const timestamp = newMetadataStorage.getEtag();

    expect(timestamp).toBe('etag123abc');
  });
});
