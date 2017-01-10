//
//  PostBaseHttpRequest.m
//  项目模板
//
//  Created by Holy on 17/1/3.
//  Copyright © 2017年 QL. All rights reserved.
//

#import "PostBaseHttpRequest.h"
#define baseURL @"https://www.baidu.com"

@implementation PostBaseHttpRequest

- (void) basePostDataRequest:(NSDictionary *)params andTransactionSuffix:(NSString *)urlSuffix andBlock:(PostBasehttpResponseBlock)block andFailure:(PostBasehttpResponseBlock)failureBlock{
    
    AFHTTPSessionManager *mgr = [AFHTTPSessionManager manager];
    
    // 2.申明返回的结果是text/html类型
    mgr.responseSerializer = [AFHTTPResponseSerializer serializer];
    // 3.设置超时时间为10s
    mgr.requestSerializer.timeoutInterval = 20;
    // /先导入证书
    //    在这加证书，一般情况适用于单项认证
    //    NSString *cerPath = [[NSBundle mainBundle] pathForResource:@"igoda" ofType:@"cer"];//证书的路径
    //
    //    NSData *certData = [NSData dataWithContentsOfFile:cerPath];
    //    if (ISNULL(certData)) {
    //        return nil;
    //    }
    // AFSSLPinningModeCertificate 使用证书验证模式
    
    AFSecurityPolicy *securityPolicy = [AFSecurityPolicy policyWithPinningMode:AFSSLPinningModeNone]; //这种模式下，证书是由合法机构颁发的，且本地不需要导入证书***
    
    // allowInvalidCertificates 是否允许无效证书（也就是自建的证书），默认为NO
    
    // 如果是需要验证自建证书，需要设置为YES
    
    securityPolicy.allowInvalidCertificates = YES;
    
    //validatesDomainName 是否需要验证域名，默认为YES；
    
    //假如证书的域名与你请求的域名不一致，需把该项设置为NO；如设成NO的话，即服务器使用其他可信任机构颁发的证书，也可以建立连接，这个非常危险，建议打开。
    
    //置为NO，主要用于这种情况：客户端请求的是子域名，而证书上的是另外一个域名。因为SSL证书上的域名是独立的，假如证书上注册的域名是www.google.com，那么mail.google.com是无法验证通过的；当然，有钱可以注册通配符的域名*.google.com，但这个还是比较贵的。
    
    //如置为NO，建议自己添加对应域名的校验逻辑。
    
    securityPolicy.validatesDomainName = NO;
    
    //    securityPolicy.pinnedCertificates = @[certData];
    mgr.securityPolicy = securityPolicy;
    
    NSString *url = [self buildUrlStr:nil andTransactionSuffix:urlSuffix];
    [mgr POST:url parameters:params progress:^(NSProgress * _Nonnull uploadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        self._data = responseObject;
        block(self);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        _error = error;
        failureBlock(self);
    }];
    
}

- (void) basePostFlagRequest:(NSDictionary *)params andTransactionSuffix:(NSString *)urlSuffix andBlock:(PostBasehttpFlagBlock)block andFailure:(PostBasehttpFlagBlock)failureBlock{
    
    AFHTTPSessionManager *mgr = [AFHTTPSessionManager manager];
    
    // 2.申明返回的结果是text/html类型
    mgr.responseSerializer = [AFHTTPResponseSerializer serializer];
    // 3.设置超时时间为10s
    mgr.requestSerializer.timeoutInterval = 20;
    // /先导入证书
    //    在这加证书，一般情况适用于单项认证
    //    NSString *cerPath = [[NSBundle mainBundle] pathForResource:@"igoda" ofType:@"cer"];//证书的路径
    //
    //    NSData *certData = [NSData dataWithContentsOfFile:cerPath];
    //    if (ISNULL(certData)) {
    //        return nil;
    //    }
    // AFSSLPinningModeCertificate 使用证书验证模式
    
    AFSecurityPolicy *securityPolicy = [AFSecurityPolicy policyWithPinningMode:AFSSLPinningModeNone]; //这种模式下，证书是由合法机构颁发的，且本地不需要导入证书***
    
    // allowInvalidCertificates 是否允许无效证书（也就是自建的证书），默认为NO
    
    // 如果是需要验证自建证书，需要设置为YES
    
    securityPolicy.allowInvalidCertificates = YES;
    
    //validatesDomainName 是否需要验证域名，默认为YES；
    
    //假如证书的域名与你请求的域名不一致，需把该项设置为NO；如设成NO的话，即服务器使用其他可信任机构颁发的证书，也可以建立连接，这个非常危险，建议打开。
    
    //置为NO，主要用于这种情况：客户端请求的是子域名，而证书上的是另外一个域名。因为SSL证书上的域名是独立的，假如证书上注册的域名是www.google.com，那么mail.google.com是无法验证通过的；当然，有钱可以注册通配符的域名*.google.com，但这个还是比较贵的。
    
    //如置为NO，建议自己添加对应域名的校验逻辑。
    
    securityPolicy.validatesDomainName = NO;
    
    //    securityPolicy.pinnedCertificates = @[certData];
    mgr.securityPolicy = securityPolicy;
    
    NSString *url = [self buildUrlStr:nil andTransactionSuffix:urlSuffix];
    [mgr POST:url parameters:params progress:^(NSProgress * _Nonnull uploadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:responseObject options:NSJSONReadingMutableContainers error:nil];
        self.flag = [NSString stringWithFormat:@"%@",dic[@"success"]];
        block(self.flag);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        self.flag = @"failure";
        _error = error;
        failureBlock(self.flag);
    }];
    
}

-(NSString*)buildUrlStr:(NSDictionary *)params andTransactionSuffix:(NSString *) urlSuffix{
    
    NSMutableString *urlString =[NSMutableString string];
    
    [urlString appendString:baseURL];
    
    [urlString appendString:urlSuffix];
    
    NSString *escapedString;
    NSInteger keyIndex = 0;
    
    
    for (id key in params) {
        if(keyIndex == 0){
            
            escapedString =(NSString*)CFBridgingRelease(CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault,(CFStringRef)[params valueForKey:key], NULL, CFSTR(":/?#[]@!$&’()*+,;="), kCFStringEncodingUTF8));
            [urlString appendFormat:@"?%@=%@",key,escapedString];
        }else{
            
            escapedString =(NSString*)CFBridgingRelease(CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault,(CFStringRef)[params valueForKey:key], NULL, CFSTR(":/?#[]@!$&’()*+,;="), kCFStringEncodingUTF8));
            [urlString appendFormat:@"&%@=%@",key,escapedString];
            
        }
        
        keyIndex ++;
    }
    return urlString;
}




@end
