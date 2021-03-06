import {Expose, Type} from 'class-transformer';
import {Aggregations} from './aggregations';
import {Hit} from './hit';

export class Result {
    @Type(() => Hit)
    private hits: Hit[];
    private semanticKeys: [];
    private totalNumber: number;
    @Type(() => Aggregations)
    private aggregations: Aggregations[];
    private otherFilters: Array<any>;
    private datePickers: Array<any>;
    getHits(): Hit[] {
        return this.hits;
    }
    setHits(hits: Hit[]): void {
        this.hits = hits;
    }
    getOtherFilters(): Array<any> {
        return this.otherFilters;
    }
    setOtherFilters(otherFilters: Array<any>): void {
        this.otherFilters = otherFilters;
    }
    getDatePickers(): Array<any> {
        return this.datePickers;
    }
    setDatePickers(datePickers: Array<any>): void {
        this.datePickers = datePickers;
    }
    getSemanticKeys(): string[] {
        return this.semanticKeys;
    }
    setSemanticKeys(semanticKeys: []): void {
        this.semanticKeys = semanticKeys;
    }
    getAggregations(): Aggregations[] {
        return this.aggregations;
    }

    setAggregations(aggregations: Aggregations[]): void {
        this.aggregations = aggregations;
    }
    getTotalNumber(): number {
        return this.totalNumber;
    }
    setTotalNumber(totalNumber: number): void {
        this.totalNumber = totalNumber;
    }
}
