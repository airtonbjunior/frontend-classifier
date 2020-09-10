import { Component, OnInit } from '@angular/core';
import { ClassifierService } from 'src/app/shared/service/classifier.service'
import { ResponseClassifier } from 'src/app/shared/model/responseClassifier.model'

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.css']
})

export class ClassifierComponent implements OnInit {

  classifierResult: ResponseClassifier;
  result: any = "";
  textSize: number;
  wordCount: number;
  frontText: any;

  constructor(
    public classifierService: ClassifierService
  ) { }

  ngOnInit(): void {
  }

  classify() {
    this.classifierService.classify({"text" : this.frontText}).subscribe(data => {
      this.classifierResult = data;
      this.result = "classe " + this.classifierResult;
      this.textSize = this.frontText.length;
      this.wordCount = this.frontText.split(' ').length;
      console.log(this.classifierResult)
      console.log(this.frontText)
      console.log(this.frontText.length)
    });
  }
}
