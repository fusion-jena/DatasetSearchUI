export class Linkage {
    private data;
    private metadata;
    private multimedia;

    getData(): string {
        return this.data;
    }

    setData(data: string): void {
        this.data = data;
    }

    getMetadata(): string {
        return this.metadata;
    }

    setMetadata(metadata: string): void {
        this.metadata = metadata;
    }
    getMultimedia(): Array<any> {
        return this.multimedia;
    }

    setMultimedia(multimedia: Array<any>): void {
        this.multimedia = multimedia;
    }
}
