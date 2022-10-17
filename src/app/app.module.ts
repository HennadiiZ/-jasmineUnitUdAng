import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './simpleTest/new-post/new-post.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // exports: [
  //   NewPostComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}




// 3. What is Jasmine / Karma?
    // ng test
    // http://localhost:9876/?id=92756591


// Section 2: Fundamentals & best practices
  // 4. Your First Test Suite
  // 5. Arrange Act Assert
  // 6. SetUp and TearDown

  // 7. Code Coverage Vs Test Coverage
    // ng test --code-coverage
    // http://localhost:9877/?id=94451240
  // 8. No Fragile Tests
  // 9. Unit Testing Vs Integration Testing


// Section 3: Advanced Testing with Jasmine
   // 10. Reactive Forms – Part 1
