//
//  AppDelegate.m
//  项目模板
//
//  Created by Holy on 17/1/3.
//  Copyright © 2017年 QL. All rights reserved.
//

#import "AppDelegate.h"
#import "FirstViewController.h"
#import "SecondViewController.h"
#import "ThirdViewController.h"
#import "RDVTabBarController.h"
#import "RDVTabBarItem.h"

@interface AppDelegate ()
@property (nonatomic,strong) UIViewController *viewController;
@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.backgroundColor = [UIColor whiteColor];
    [self setupViewControllers];
    self.window.rootViewController = self.viewController;
    [self.window makeKeyAndVisible];
    return YES;
}

- (void) setupViewControllers {
    UIViewController *firstVC = [[FirstViewController alloc] init];
    UIViewController *firstNav = [[UINavigationController alloc] initWithRootViewController:firstVC];
    
    UIViewController *secondVC = [[SecondViewController alloc] init];
    UIViewController *secondNav = [[UINavigationController alloc] initWithRootViewController:secondVC];
    
    UIViewController *thirdVC = [[ThirdViewController alloc] init];
    UIViewController *thirdNav = [[UINavigationController alloc] initWithRootViewController:thirdVC];
    
    RDVTabBarController *tabBarController = [[RDVTabBarController alloc] init];
    [tabBarController setViewControllers:@[firstNav,secondNav,thirdNav]];
    
    self.viewController = tabBarController;
    
    [self customizeTabBarForController:tabBarController];
}

- (void) customizeTabBarForController:(RDVTabBarController *)tabBarController {
    
    UIImage *finishedImage = [UIImage imageNamed:@"tabbar_selected_background"];//改变选中后的item的背景色或者图片
    UIImage *unfinishedImage = [UIImage imageNamed:@"tabbar_normal_background"];
    NSArray *tabBarItemImages = @[@"first", @"second", @"third"];
    
    NSInteger index = 0;
    
    for (RDVTabBarItem *item in [[tabBarController tabBar] items]) {
        if (index == 0) item.title = @"first title";
        if (index == 1) item.title = @"second title";
        if (index == 2) item.title = @"third title";
        
        [item setBackgroundSelectedImage:nil withUnselectedImage:unfinishedImage];
        UIImage *selectedimage = [UIImage imageNamed:[NSString stringWithFormat:@"%@_selected",
                                                      [tabBarItemImages objectAtIndex:index]]];
        UIImage *unselectedimage = [UIImage imageNamed:[NSString stringWithFormat:@"%@_normal",
                                                        [tabBarItemImages objectAtIndex:index]]];
        [item setFinishedSelectedImage:selectedimage withFinishedUnselectedImage:unselectedimage];
        
        index++;
    }
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
