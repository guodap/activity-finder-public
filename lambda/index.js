const Alexa = require('ask-sdk-core');
const interceptors = require('./lib/interceptors');
const handlers = require('./lib/handlers');

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        handlers.LaunchRequestHandler,
        handlers.RecommendThingsToDoIntent,
        handlers.SendItineraryIntent,
        handlers.PutAPinOnItIntent,
        handlers.HelpIntentHandler,
        handlers.CancelAndStopIntentHandler,
        handlers.FallbackIntentHandler,
        handlers.SessionEndedRequestHandler,
        handlers.IntentReflectorHandler,
        handlers.ReadItineraryIntent)
    .addErrorHandlers(
        handlers.ErrorHandler)
    .addRequestInterceptors(
        interceptors.LocalisationRequestInterceptor,
        interceptors.LoggingRequestInterceptor
    )
    .addResponseInterceptors(
        interceptors.LoggingResponseInterceptor)
    .withApiClient(new Alexa.DefaultApiClient())
    .withCustomUserAgent('sample/things-to-do/v1.2')
    .lambda();