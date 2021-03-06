/*!
 * Copyright 2013 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var RestUtil = require('oae-rest/lib/util');

/**
 * Method that performs a request to the REST endpoint of LibrarySearch
 */
module.exports.search = function(restCtx, query, callback) {
    var params = {
        'query': query
    };
    RestUtil.RestRequest(restCtx, '/api/librarysearch', 'GET', params, callback);
};
