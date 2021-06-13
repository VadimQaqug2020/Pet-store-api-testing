import got from 'got'
import {URLSearchParams} from 'url'

export class PetController {
    async getById(id: number | string) {
        const response = await got(`http://0.0.0.0:8080/api/pet/${id}`)
        return JSON.parse(response.body)
    }
    async findByStatus() {
        const response = await got(`http://0.0.0.0:8080/api/pet/findByStatus?status=sold`
            // searchParams: new URLSearchParams({ status })
        )
        return JSON.parse(response.body)
    }
    
}
