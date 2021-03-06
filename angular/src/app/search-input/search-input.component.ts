import {Component, EventEmitter, Output} from '@angular/core';
import {NodeService} from '../services/remote/node.service';
import {CommunicationService} from '../services/local/communication.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {StartSearchingService} from '../services/local/start-searching.service';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

    constructor(private nodeService: NodeService,
                private startSearchingService: StartSearchingService,
                private communicationService: CommunicationService) {
    }

    faSearch = faSearch;
    searchKey: any;
    @Output() searchKeyEmmit = new EventEmitter<any>();
    result: any;
    windowSuggestion = false;
    semanticValue: boolean;
    format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    alert = false;

	semSearchImg: string = environment.imagePath + environment.semSearchImg;
	
    // by entering a letter on the form, a request will be sent to the node server and then it will be sent to suggestion-window
    onWindowSuggestKey(value): void {
        if (value !== undefined) {
            (document.getElementById('searchField') as HTMLInputElement).value = value;
            this.searchKey = value;
            this.startSearching(this.semanticValue);
            this.windowSuggestion = false;
        }
    }

    // by clicking on the submit button, this method will be called
    onSearch(): void {
        this.semanticValue = false;
        this.startSearching(this.semanticValue);
    }

    semantic(): void {
        this.semanticValue = true;
        this.startSearching(this.semanticValue);
    }

    startSearching(semantic: boolean): void {
        const keyAndSemantic = [this.searchKey, semantic];
        this.searchKeyEmmit.emit(keyAndSemantic);
    }

    onSuggest(): void {
        this.nodeService.suggest(this.searchKey).subscribe(data => {
            this.communicationService.setSuggest(data.suggest[0].options);
            this.alert = this.format.test(this.searchKey);
            this.windowSuggestion = !this.format.test(this.searchKey);
        });
    }

}
