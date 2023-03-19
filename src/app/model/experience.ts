export class Experience {
    id?: number;
    companyName: string;
    jobDescription: string;

    constructor( companyName: string, jobDescription: string){
        this.companyName = companyName;
        this.jobDescription = jobDescription;
    }
}
