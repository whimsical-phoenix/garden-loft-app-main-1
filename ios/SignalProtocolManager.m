#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SignalProtocolManager, NSObject)
RCT_EXTERN_METHOD(encryptMessage:(NSString *)message resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
// Define other methods similarly
@end
