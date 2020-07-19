(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),l=(a(0),a(170)),i={title:"Quick Start"},c={id:"quickstart",isDocsHomePage:!1,title:"Quick Start",description:"This guide gets you started with ZIO gRPC with a simple working example.",source:"@site/../zio-grpc-docs/target/mdoc/quickstart.md",permalink:"/zio-grpc/docs/quickstart",editUrl:"https://github.com/scalapb/zio-grpc/edit/master/foo/docs/../zio-grpc-docs/target/mdoc/quickstart.md",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/zio-grpc/docs/"},next:{title:"Basics Tutorial",permalink:"/zio-grpc/docs/basics"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Get the example code",id:"get-the-example-code",children:[]},{value:"Run the example",id:"run-the-example",children:[]},{value:"Update a gRPC service",id:"update-a-grpc-service",children:[]},{value:"Update the app",id:"update-the-app",children:[{value:"Update the server",id:"update-the-server",children:[]},{value:"Update the client",id:"update-the-client",children:[]}]},{value:"Run the updated app",id:"run-the-updated-app",children:[]},{value:"What&#39;s next",id:"whats-next",children:[]}],p={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This guide gets you started with ZIO gRPC with a simple working example."),Object(l.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://jdk.java.net"}),"JDK")," version 8 or higher"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.scala-sbt.org/"}),"SBT"))),Object(l.b)("h2",{id:"get-the-example-code"},"Get the example code"),Object(l.b)("p",null,"The example code is part of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/zio-grpc"}),"zio-grpc")," repository."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/zio-grpc/archive/v0.4.0-RC1.zip"}),"Download the repo as a zip file")," and unzip it, or clone the repo:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/scalapb/zio-grpc\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Change to the examples directory:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd zio-grpc/examples\n")))),Object(l.b)("h2",{id:"run-the-example"},"Run the example"),Object(l.b)("p",null,"From the ",Object(l.b)("inlineCode",{parentName:"p"},"examples")," directory:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the server:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sbt "runMain zio_grpc.examples.helloworld.HelloWorldServer"\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"From another terminal, run the client:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sbt "runMain zio_grpc.examples.helloworld.HelloWorldClient"\n')))),Object(l.b)("p",null,"Congratulations! You\u2019ve just run a client-server application with ZIO gRPC."),Object(l.b)("h2",{id:"update-a-grpc-service"},"Update a gRPC service"),Object(l.b)("p",null,"In this section you\u2019ll update the application by adding an extra server method. The gRPC service is defined using ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/protocol-buffers"}),"protocol buffers"),". To learn more about how to define a service in a ",Object(l.b)("inlineCode",{parentName:"p"},".proto")," file see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/zio-grpc/docs/basics"}),"Basics Tutorial"),". For now, all you need to know is that both the server and the client stub have a ",Object(l.b)("inlineCode",{parentName:"p"},"SayHello()")," RPC method that takes a ",Object(l.b)("inlineCode",{parentName:"p"},"HelloRequest")," parameter from the client and returns a ",Object(l.b)("inlineCode",{parentName:"p"},"HelloReply")," from the server, and that the method is defined like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),"// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user's name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n")),Object(l.b)("p",null,"Open ",Object(l.b)("inlineCode",{parentName:"p"},"src/main/protobuf/helloworld.proto")," and add a new ",Object(l.b)("inlineCode",{parentName:"p"},"SayHelloAgain()")," method with the same request and response types as ",Object(l.b)("inlineCode",{parentName:"p"},"SayHello()"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),"// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n  // Sends another greeting\n  rpc SayHelloAgain (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user's name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n")),Object(l.b)("p",null,"Remember to save the file!"),Object(l.b)("h2",{id:"update-the-app"},"Update the app"),Object(l.b)("p",null,"The next time we compile the app (using ",Object(l.b)("inlineCode",{parentName:"p"},"compile")," in sbt), ZIO gRPC will regenerate ",Object(l.b)("inlineCode",{parentName:"p"},"ZioHelloworld.scala")," which contains a trait with the service definition. The trait has an abstract method for which RPC method. Therefore, with the new method added to the trait, we expect the compilation of ",Object(l.b)("inlineCode",{parentName:"p"},"HelloWorldServer.scala")," to fail, since the method ",Object(l.b)("inlineCode",{parentName:"p"},"sayHelloAgain")," will be undefined."),Object(l.b)("p",null,"Let's implement the new method in the server and call it from the client."),Object(l.b)("h3",{id:"update-the-server"},"Update the server"),Object(l.b)("p",null,"Open ",Object(l.b)("inlineCode",{parentName:"p"},"src/main/scala/zio_grpc/examples/helloworld/HelloWorldServer.scala"),", and add the following method to ",Object(l.b)("inlineCode",{parentName:"p"},"GreeterImpl"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'def sayHelloAgain(request: HelloRequest) =\n  ZIO.succeed(HelloReply(s"Hello again, ${request.name}"))\n')),Object(l.b)("h3",{id:"update-the-client"},"Update the client"),Object(l.b)("p",null,"Open ",Object(l.b)("inlineCode",{parentName:"p"},"src/main/scala/zio_grpc/examples/helloworld/HelloWorldClient.scala"),", and add the following method to ",Object(l.b)("inlineCode",{parentName:"p"},"GreeterImpl"),":"),Object(l.b)("p",null,"Update the definition of ",Object(l.b)("inlineCode",{parentName:"p"},"myAppLogic"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'def myAppLogic =\n  for {\n    r <- GreeterClient.sayHello(HelloRequest("World"))\n    _ <- putStrLn(r.message)\n    s <- GreeterClient.sayHelloAgain(HelloRequest("World"))\n    _ <- putStrLn(s.message)\n  } yield ()\n')),Object(l.b)("h2",{id:"run-the-updated-app"},"Run the updated app"),Object(l.b)("p",null,"If you still have the previous version of the server running, stop it by hitting ",Object(l.b)("inlineCode",{parentName:"p"},"Ctrl-C"),". Run the server and client like you did before. Execute the following command from the ",Object(l.b)("inlineCode",{parentName:"p"},"examples")," directory:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the server:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sbt "runMain zio_grpc.examples.helloworld.HelloWorldServer"\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"From another terminal, run the client:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sbt "runMain zio_grpc.examples.helloworld.HelloWorldClient"\n')))),Object(l.b)("h2",{id:"whats-next"},"What's next"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Work through the ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/zio-grpc/docs/basics"}),"Basics Tutorial"),".")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},'This document, "ZIO gRPC: Quick Start", is a derivative of ',Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://grpc.io/docs/languages/java/quickstart/"}),'"gRPC ',"\u2013",' Quick Start"')," by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC Authors"),", used under ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://creativecommons.org/licenses/by/4.0"}),"CC-BY-4.0"),'. "ZIO gRPC: Quick Start" is licensed under ',Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://creativecommons.org/licenses/by/4.0"}),"CC-BY-4.0")," by Nadav Samet."))))}s.isMDXComponent=!0}}]);