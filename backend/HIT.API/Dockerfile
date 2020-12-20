FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS publish
WORKDIR /src
COPY HIT.API.csproj ./

RUN dotnet restore "./HIT.API.csproj" --runtime alpine-x64
COPY . .
RUN dotnet publish "HIT.API.csproj" -c Release -o /app/publish \
  --no-restore \
  --runtime alpine-x64 \
  --self-contained true \
  /p:PublishTrimmed=true

FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine

ENV ASPNETCORE_ENVIRONMENT Docker
# create a new user and change directory ownership
RUN adduser --disabled-password \
  --home /app \
  --gecos '' dotnetuser && chown -R dotnetuser /app

# impersonate into the new user
USER dotnetuser
WORKDIR /app


COPY --from=publish /app/publish .

ENV ASPNETCORE_URLS http://*:5000
# instruct Kestrel to expose API on port 5000
ENTRYPOINT ["dotnet", "HIT.API.dll"]