import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable }  from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

// Inject breakpoints, listen to different breakpoint reacting to different viewport size (mobile, monitor)

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches), // map the result as the breakpoint changed, single value to use condtional logic in the template
      shareReplay() // subcribing to the observer multiply times, all subcrition listen to the most recent value of the observed value

    );

  constructor(private breakpointObserver: BreakpointObserver) {
    
  }
}
