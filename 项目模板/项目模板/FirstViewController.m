//
//  FirstViewController.m
//  项目模板
//
//  Created by Holy on 17/1/3.
//  Copyright © 2017年 QL. All rights reserved.
//

#import "FirstViewController.h"

@interface FirstViewController ()
@property (nonatomic,strong) UIWindow *coverWindow;
@end

@implementation FirstViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.title = @"first";
    self.view.backgroundColor = [UIColor redColor];
}

- (void) viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    self.coverWindow = nil;
}

- (void) viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    self.navigationController.navigationBarHidden = YES;
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.8 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [self.coverWindow makeKeyWindow];
        [window makeKeyWindow];
    });
}

- (UIWindow *) coverWindow {
    if (!_coverWindow) {
        _coverWindow = [[UIWindow alloc] initWithFrame:CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, 20)];
        _coverWindow.hidden = NO;
        _coverWindow.backgroundColor = [UIColor clearColor];
        _coverWindow.windowLevel = UIWindowLevelStatusBar + 1;
        //添加手势
        UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(tapWindowScrollToTps)];
        [_coverWindow addGestureRecognizer:tap];
    }
    return _coverWindow;
}

- (void) tapWindowScrollToTps{
    NSLog(@"点击了顶部的window");
}



- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
