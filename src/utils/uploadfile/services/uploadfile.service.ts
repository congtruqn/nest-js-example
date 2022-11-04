import { Injectable } from "@nestjs/common";
import * as ftp from "basic-ftp"
import { Readable } from 'stream'

const fptConfig = {
    host: "139.59.245.254",
    user: "exceltech",
    password: "123456Aa",
    secure: false
}

@Injectable()
export class UploadFileService {
    constructor(
    ) {}
    async upload(data:Buffer,dir:string,fileName:string) {
        const client = new ftp.Client()
        client.ftp.verbose = true
        try {
            await client.access(fptConfig)
            const readable = new Readable()
            readable._read = () => {}
            readable.push(data)
            readable.push(null)
            await client.ensureDir("/files/"+dir)
            await client.uploadFrom(readable, `/files/${dir}/${fileName}`);
        }
        catch(err) {
            console.log(err)
        }
        client.close()
    }
    async remove(path:string):Promise<string> {
        const client = new ftp.Client()
        client.ftp.verbose = true
        try {
            await client.access(fptConfig)
            await client.remove(`/files/${path}`)
        }
        catch(err) {
            console.log(err)
        }
        client.close()
        return "";
    }
}