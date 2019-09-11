import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName = 'Test Server'
  serverCreated = false
  servers = ['Test server', 'Test server 2']
  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
    
   }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created Name is: ' +  this.serverName
  }

  onUpdateServerName(e: any) {
    this.serverName = e.target.value
    
  }

}
