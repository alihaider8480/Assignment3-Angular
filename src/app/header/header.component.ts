import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  homepageCalled:EventEmitter<string> = new EventEmitter<string>();

  updateloginvalued:string = "";
  blogValue:string = "";



  @Input('getting-LoginValue-FromHeader')
  set SetLoginValueCodeValue(login: string)
  {
      if(login =='Loggined')
      {
        this.blogValue = "Blogs";
      }
  }


  pressHome(data: string)
  {

    if(data === 'home')
    {
      this.homepageCalled.emit('Home Component Called');
    }
    else if(data === 'contact')
    {
      this.homepageCalled.emit('Contact Component Called');
    }
    else if(data === 'about')
    {
      this.homepageCalled.emit('About Component Called');
    }
    else if(data === 'blogs')
    {
      this.homepageCalled.emit('Blogs Component Called');
    }

  }
}
