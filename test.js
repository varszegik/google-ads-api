/*

    The magic command to get a usable bundle that we can use is 

    pbjs -t static-module -p protos protos/google/ads/googleads/v0/services/ad_group_ad_service.proto > bundle.js

*/

// const pb = require('./bundle.js')

// console.log(pb)

// return
var grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { OAuth2Client } = require('google-auth-library');

const oAuth2Client = new OAuth2Client();

// const OAuth2Client = google.auth.OAuth2;

oAuth2Client.setCredentials({
    
    access_token : '123'
});

var packageDefinition = protoLoader.loadSync('bundle.proto',{
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const big_thing = protoDescriptor.google.ads.googleads.v0.services.GoogleAdsService

console.log(big_thing)


var client = new big_thing('googleads.googleapis.com/v0', 
    grpc.credentials.compose()); // not working

    

console.log(client)
client.Search({}, function(error, res){
    console.log(error)
})

