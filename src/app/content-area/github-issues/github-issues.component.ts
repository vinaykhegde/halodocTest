import { Component, OnInit } from '@angular/core';
import { GithubIssuesService} from './github-issues.service';
import { IssueError } from 'src/app/issueError';

@Component({
  selector: 'app-github-issues',
  templateUrl: './github-issues.component.html',
  styleUrls: ['./github-issues.component.css']
})
export class GithubIssuesComponent implements OnInit {
  issues: any;
  name: string;
  issueCount: string;

  constructor(public GithubIssuesService: GithubIssuesService) { }

  ngOnInit() {
    this.GithubIssuesService.getIssues()
    .subscribe(result => {
      this.issues = result;
      this.name = result.name;
      this.issueCount = result.open_issues_count;
      console.log(result);
    },
    (err: IssueError) => console.group(err)
    )
  }

}
