import got from 'got';
import {strict as assert} from 'assert';
import {URLSearchParams} from 'url'
import { PetController } from '../api/controller/pet.controller'

const pet = new PetController

describe('User can', function () {
    it('receive pet by Id', async function () {
        // const response = await got('http://0.0.0.0:8080/api/pet/1')
        // const body = JSON.parse(response.body)

        const body = await pet.getById(1)
        assert(body.id == 1, `Expected 1, but received ${body.id}`)
    })
    it('receive pet by status', async function () {
        // let response = await got('http://0.0.0.0:8080/api/pet/findByStatus', {
        //     searchParams:{ status: 'available'}
        // })
        // let body = JSON.parse(response.body)
        
        let body = await pet.findByStatus('available') 
        assert(body.length > 0)

        // body = await pet.findByStatus('pending') 
        // assert(body.length > 0)

        // response = await got('http://0.0.0.0:8080/api/pet/findByStatus', {
        //     searchParams:{ status: 'pending'}
        // })
        // body = JSON.parse(response.body)
        // assert(body.length > 0)

        // response = await got('http://0.0.0.0:8080/api/pet/findByStatus', {
        //     searchParams:{ status: 'sold'}
        // })
        // body = JSON.parse(response.body)
        // assert(body.length > 0)
        // body = await pet.findByStatus('sold') 
        // assert(body.length > 0)

        // body = await pet.findByStatus(['pending', 'available']) 
        // assert(body.length > 0)

        // // response = await got('http://0.0.0.0:8080/api/pet/findByStatus', {
        // //     searchParams:new URLSearchParams({ status: ['pending', 'available']})
        // // })
        // // body = JSON.parse(response.body)
        // assert(body.length > 0)
        // assert(body.some((pet: any) => pet.status == 'available'))
        // assert(body.some((pet: any) => pet.status == 'pending'))
        // assert(!body.some((pet: any) => pet.status == 'sold'))


    })
    // it('find by tag', async function () {
    //     const response = await got('http://0.0.0.0:8080/api/pet/findByStatus', {
    //         searchParams:{ tags: 'tag1'}
    // })
    //         const body = JSON.parse(response.body)
    //         assert(body.length > 0)
    //         assert(body.some((pet: any) => pet.tags.some((tag: any) => tag.name == 'tag1')))
        
    // })
})