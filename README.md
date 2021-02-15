# SocialConnect

This is a working social networking application to manage activity with user group chat.

#### Some of the highlighting features

* Using React with Typescript
* Backend is build on ASP.NET Core3
* Clean Architecture and the CQRS + Mediator pattern
* Setting up and configuring ASP.NET Core identity for authentication
* Adding a Client side login and register function to our React application
* Using AutoMapper in ASP.NET Core
* Building a great looking UI using Semantic UI
* Adding Photo Upload widget and creating user profile page
* Paging, Sorting and Filtering
* Using SignalR to enable real time web communication to a chat feature


#### Common commands:
* Run API (@API folder):
dotnet watch run

* Reset Data (@root level):
  * Step 1: Drop database -> dotnet ef database drop -p Persistence/ -s API/
  * Step 2: Restart service -> cd API/ -> dotnet watch run

* Add new migrations (@root level):
dotnet ef migrations add "NAME GOES HERE" -p Persistence/ -s API/

* Create secret key locally (@root level):
  * dotnet user-secrets init -p API/ -> creates a GUID as user secret key in API project file
  * dotnet user-secrets set "TokenKey" "KEY GOES HERE" -p API/ -> Used to add a key
  * dotnet user-secrets list -p API/ -> to list stored keys
  * dotnet user-secrets set "Cloudinary:CloudName" "KEY GOES HERE"
  * dotnet user-secrets set "Cloudinary:ApiKey" "KEY GOES HERE"
  * dotnet user-secrets set "Cloudinary:ApiSecret" "KEY GOES HERE"
  * dotnet user-secrets list -> to list all the secrets saved

