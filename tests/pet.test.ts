import got from 'got';
import {strict as assert} from 'assert';

describe('User can', function () {
    it('receive pet by Id', async function () {
        const response = await got('http://0.0.0.0:8080/api/pet/1')
        const body = JSON.parse(response.body)

        assert(body.id == 1, `Expected 1, but received ${body.id}`)
    })
})