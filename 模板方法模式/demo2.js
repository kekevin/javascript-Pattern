/**
 * 分离出demo1共同点
 * 1.把水煮沸
 * 2.用沸水冲泡饮料
 * 3.把饮料倒进杯子
 * 4.加调料
 *  */


//  抽象父类
var Beverage = function () { };
Beverage.prototype.boilWater = function () {
  console.log('把水煮沸');
};
Beverage.prototype.brew = function () { }; // 空方法，应该由子类重写
Beverage.prototype.pourInCup = function () { }; // 空方法，应该由子类重写
Beverage.prototype.addCondiments = function () { }; // 空方法，应该由子类重写
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};

//  创建 Coffee 子类和 Tea 子类
var Coffee = function () { };
Coffee.prototype = new Beverage();  //  继承父类
Coffee.prototype.brew = function () {
  console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
}; 
Coffee.prototype.addCondiments = function(){ 
  console.log( '加糖和牛奶' ); 
 }; 
 var Coffee = new Coffee(); 
 Coffee.init(); 

console.log('-------------------')

 var Tea = function(){}; 
Tea.prototype = new Beverage(); 
Tea.prototype.brew = function(){ 
 console.log( '用沸水浸泡茶叶' ); 
}; 
Tea.prototype.pourInCup = function(){ 
 console.log( '把茶倒进杯子' ); 
}; 
Tea.prototype.addCondiments = function(){ 
  console.log( '加柠檬' ); 
 }; 
 var tea = new Tea(); 
 tea.init(); 