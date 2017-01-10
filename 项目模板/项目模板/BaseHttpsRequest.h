//
//  BaseHttpsRequest.h
//  项目模板
//
//  Created by Holy on 17/1/3.
//  Copyright © 2017年 QL. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AFNetWorking.h"

@interface BaseHttpsRequest : NSObject

@property (nonatomic,strong) NSError *error;
@property (nonatomic,strong) id _data;
@property (nonatomic,copy) NSString *flag;

typedef void (^basehttpResponseBlock)(BaseHttpsRequest *responseData);
typedef void (^basehttpFlagBlock)(NSString *flag);

- (void) baseGetRequest:(NSDictionary *)params andTransacionSuffix:(NSString *)urlSuffix andBlock:(basehttpResponseBlock)block andFailure:(basehttpResponseBlock)failureBlock;

@end
