(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,a){e.exports=a(71)},46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=(a(46),a(1)),o=a(2),i=a(6),u=a(3),m=a.n(u),d=a(7),E=a(8),p=a.n(E),f=a(40);function v(e){var t=e.component,a=Object(f.a)(e,["component"]),n=Object(s.c)((function(e){return e.userSignin})).userInfo;return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/signin"})}}))}var g=a(17),h=function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n,r){var l,c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.get("/api/products/".concat(e));case 2:l=a.sent,c=l.data,n({type:"CART_ADD_ITEM",payload:{name:c.name,image:c.image,price:c.price,countInStock:c.countInStock,product:c._id,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()};function S(e){return r.a.createElement("div",{className:"alert alert-".concat(e.variant," || 'info'}")},e.children)}function y(e){var t=e.match.params.id,a=e.location.search?Number(e.location.search.split("=")[1]):1,l=Object(s.c)((function(e){return e.cart})).cartItems,c=Object(s.b)();Object(n.useEffect)((function(){t&&c(h(t,a))}),[c,t,a]);var i=function(e){c(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"CART_REMOVE_ITEM",payload:e}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(e))};return r.a.createElement("div",{className:"row top"},r.a.createElement("div",{className:"col-2"},r.a.createElement("h1",null,"Shopping Cart"),0===l.length?r.a.createElement(S,null,"Cart is empty. ",r.a.createElement(o.b,{to:"/"},"Go Shopping")):r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",{key:e.product},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("img",{src:e.image,alt:e.name,className:"small"})),r.a.createElement("div",{className:"min-30"},r.a.createElement(o.b,{to:"/product/".concat(e.product)},e.name)),r.a.createElement("div",null,r.a.createElement("select",{value:e.qty,onChange:function(t){return c(h(e.product,Number(t.target.value)))}},Object(g.a)(Array(e.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)})))),r.a.createElement("div",null,e.price),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return i(e.product)}},"Delete"))))})))),r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,"Subtotal (",l.reduce((function(e,t){return e+t.qty}),0)," items): $",l.reduce((function(e,t){return e+t.price*t.qty}),0))),r.a.createElement("li",null,r.a.createElement("button",{type:"button",onClick:function(){e.history.push("/signin?redirect=shipping")},className:"primary block",disabled:0===l.length},"Proceed to Checkout"))))))}function b(e){var t=e.rating,a=e.numReviews;return r.a.createElement("div",{className:"rating"},r.a.createElement("span",null,r.a.createElement("i",{className:t>=1?"fa fa-star":t>=.5?"fa fa-star-half-o":"fa fa-star-o"})),r.a.createElement("span",null,r.a.createElement("i",{className:t>=2?"fa fa-star":t>=1.5?"fa fa-star-half-o":"fa fa-star-o"})),r.a.createElement("span",null,r.a.createElement("i",{className:t>=3?"fa fa-star":t>=2.5?"fa fa-star-half-o":"fa fa-star-o"})),r.a.createElement("span",null,r.a.createElement("i",{className:t>=4?"fa fa-star":t>=3.5?"fa fa-star-half-o":"fa fa-star-o"})),r.a.createElement("span",null,r.a.createElement("i",{className:t>=5?"fa fa-star":t>=4.5?"fa fa-star-half-o":"fa fa-star-o"})),r.a.createElement("span",null,a+" reviews"))}function _(e){var t=e.p;return r.a.createElement("div",{key:t._id,className:"card"},r.a.createElement(o.b,{to:"/product/".concat(t._id)},r.a.createElement("img",{className:"medium",src:t.image,alt:t.name})),r.a.createElement("div",{className:"card-body"},r.a.createElement(o.b,{to:"/product/".concat(t._id)},r.a.createElement("h2",null,t.name)),r.a.createElement(b,{rating:t.rating,numReviews:t.numReviews}),r.a.createElement("div",{className:"price"},"$ ",t.price)))}function O(){return r.a.createElement("div",{className:"loading"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"})," Loading...")}function I(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.productList})),a=t.loading,l=t.error,c=t.products;return Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"PRODUCT_LIST_REQUEST"}),e.prev=1,e.next=4,p.a.get("/api/products");case 4:a=e.sent,n=a.data,t({type:"PRODUCT_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"PRODUCT_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement("div",null,a?r.a.createElement(O,null):l?r.a.createElement(S,{variant:"danger"},l):r.a.createElement("div",{className:"row center"},c.map((function(e){return r.a.createElement(_,{key:e._id,p:e})}))))}var R=a(5),N=a(38);function C(e){var t=e.match.params.id,a=Object(n.useState)(!1),l=Object(R.a)(a,2),c=l[0],i=l[1],u=Object(s.c)((function(e){return e.orderDetails})),E=u.order,f=u.loading,v=u.error,g=Object(s.c)((function(e){return e.orderPay})),h=g.loading,y=g.error,b=g.success,_=Object(s.b)();Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/config/paypal");case 2:t=e.sent,a=t.data,(n=document.createElement("script")).type="text/javascript",n.src="https://www.paypal.com/sdk/js?client-id=".concat(a),n.async=!0,n.onload=function(){i(!0)},document.body.appendChild(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!E||!E._id||b||E&&E._id!==t?(_({type:"ORDER_PAY_RESET"}),_(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,l,c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"ORDER_DETAILS_REQUEST",payload:e}),r=n(),l=r.userSignin.userInfo,t.prev=2,t.next=5,p.a.get("/api/orders/".concat(e),{headers:{Authorization:"Bearer ".concat(l.token)}});case 5:c=t.sent,s=c.data,a({type:"ORDER_DETAILS_SUCCESS",payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:"ORDER_DETAILS_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}()}(t))):E.isPaid||(window.paypal?i(!0):e())}),[t,_,E,c,b]);return f?r.a.createElement(O,null):v?r.a.createElement(S,{variant:"danger"},"error"):r.a.createElement("div",null,r.a.createElement("h1",null,"Order ",E._id),r.a.createElement("div",{className:"row top"},r.a.createElement("div",{className:"col-2"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"card card-body"},r.a.createElement("h2",null,"Shipping"),r.a.createElement("p",null,r.a.createElement("strong",null,"Name: "),E.shippingAddress.fullName,r.a.createElement("br",null),r.a.createElement("strong",null,"Address: "),E.shippingAddress.address,", ",E.shippingAddress.city,","," ",E.shippingAddress.postalCode,","," ",E.shippingAddress.country),E.isDelivered?r.a.createElement(S,{variant:"success"},"Delivered at: ",E.deliveredAt):r.a.createElement(S,{variant:"danger"},"Not Delivered"))),r.a.createElement("li",null,r.a.createElement("div",{className:"card card-body"},r.a.createElement("h2",null,"Payment"),r.a.createElement("p",null,r.a.createElement("strong",null,"Method: "),E.paymentMethod),E.isPaid?r.a.createElement(S,{variant:"success"},"Paid at: ",E.paidAt):r.a.createElement(S,{variant:"danger"},"Not Paid"))),r.a.createElement("li",null,r.a.createElement("div",{className:"card card-body"},r.a.createElement("h2",null,"Order Items"),r.a.createElement("ul",null,E.orderItems.map((function(e){return r.a.createElement("li",{key:e.product},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("img",{src:e.image,alt:e.name,className:"small"})),r.a.createElement("div",{className:"min-30"},r.a.createElement(o.b,{to:"/product/".concat(e.product)},e.name)),r.a.createElement("div",null,e.qty," x $",e.price," = $",e.qty*e.price)))}))))))),r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,"Order Summary")),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Items"),r.a.createElement("div",null,"$",E.itemsPrice.toFixed(2)))),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Shipping"),r.a.createElement("div",null,"$",E.shippingPrice.toFixed(2)))),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Tax"),r.a.createElement("div",null,"$",E.taxPrice.toFixed(2)))),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("strong",null,"Order Total")),r.a.createElement("div",null,r.a.createElement("strong",null,"$",E.totalPrice.toFixed(2))))),!E.isPaid&&r.a.createElement("li",null,c?r.a.createElement(r.a.Fragment,null,y&&r.a.createElement(S,{variant:"danger"},y),h&&r.a.createElement(O,null),r.a.createElement(N.PayPalButton,{amount:E.totalPrice,onSuccess:function(e){_(function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n,r){var l,c,s,o;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n({type:"ORDER_PAY_REQUEST",payload:{order:e,paymentResult:t}}),l=r(),c=l.userSignin.userInfo;try{s=p.a.put("/api/orders/".concat(e._id,"/pay"),t,{headers:{Authorization:"Bearer ".concat(c.token)}}),o=s.data,n({type:"ORDER_PAY_SUCCESS",payload:o})}catch(v){n({type:"ORDER_PAY_FAIL",payload:v.response&&v.response.data.message?v.response.data.message:v.message})}case 3:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}(E,e))}})):r.a.createElement(O,null)))))))}function A(e){var t=Object(s.c)((function(e){return e.orderMineList})),a=t.loading,l=t.error,c=t.orders,o=Object(s.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(d.a)(m.a.mark((function e(t,a){var n,r,l,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"ORDER_MINE_LIST_REQUEST"}),n=a(),r=n.userSignin.userInfo,e.prev=2,e.next=5,p.a.get("/api/orders/mine",{headers:{Authorization:"Bearer ".concat(r.token)}});case 5:l=e.sent,c=l.data,t({type:"ORDER_MINE_LIST_SUCCESS",payload:c}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),s=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:"ORDER_MINE_LIST_FAIL",payload:s});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}())}),[o]),r.a.createElement("div",null,r.a.createElement("h1",null,"Order History"),a?r.a.createElement(O,null):l?r.a.createElement(S,{variant:"danger"},l):r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"DATE"),r.a.createElement("th",null,"TOTAL"),r.a.createElement("th",null,"PAID"),r.a.createElement("th",null,"DELIVERED"),r.a.createElement("th",null,"ACTIONS"))),r.a.createElement("tbody",null,c.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t._id),r.a.createElement("td",null,t.createdAt.substring(0,10)),r.a.createElement("td",null,t.totalPrice.toFixed(2)),r.a.createElement("td",null,t.isPaid?t.paidAt.substring(0,10):"No"),r.a.createElement("td",null,t.isDelivered?t.deliveredAt.substring(0,10):"No"),r.a.createElement("td",null,r.a.createElement("button",{className:"small",type:"button",onClick:function(){e.history.push("/order/".concat(t._id))}},"Details")))})))))}function T(e){return r.a.createElement("div",{className:"row checkout-steps"},r.a.createElement("div",{className:e.step1?"active":""},"Sign-In"),r.a.createElement("div",{className:e.step2?"active":""},"Shipping"),r.a.createElement("div",{className:e.step3?"active":""},"Payment"),r.a.createElement("div",{className:e.step4?"active":""},"Place Order"))}function w(e){Object(s.c)((function(e){return e.cart})).shippingAddress.length<=0&&e.history.push("/shipping");var t=Object(n.useState)("PayPal"),a=Object(R.a)(t,2),l=a[0],c=a[1],o=Object(s.b)();return r.a.createElement("div",null,r.a.createElement(T,{step1:!0,step2:!0,step3:!0}),r.a.createElement("form",{className:"form",onSubmit:function(t){var a;t.preventDefault(),o((a=l,function(e){e({type:"CART_SAVE_PAYMENT_METHOD",payload:a})})),e.history.push("/placeorder")}},r.a.createElement("div",null,r.a.createElement("h1",null,"Payment Method")),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"paypal",value:"PayPal",name:"paymentMethod",required:!0,checked:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{htmlFor:"paypal"},"Paypal")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"stripe",value:"Stripe",name:"paymentMethod",required:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{htmlFor:"stripe"},"Stripe"))),r.a.createElement("div",null,r.a.createElement("button",{className:"primary",type:"submit"},"Continue"))))}var j=a(9);function P(e){var t=Object(s.c)((function(e){return e.cart}));t.paymentMethod||e.history.push("/payment");var a=Object(s.c)((function(e){return e.orderCreate})),l=a.loading,c=a.success,i=a.error,u=a.order,E=function(e){return Number(e.toFixed(2))};t.itemsPrice=E(t.cartItems.reduce((function(e,t){return e+t.qty*t.price}),0)),t.shippingPrice=t.itemsPrice>100?E(0):E(10),t.taxPrice=E(.15*t.itemsPrice),t.totalPrice=t.itemsPrice+t.shippingPrice+t.taxPrice;var f=Object(s.b)();return Object(n.useEffect)((function(){c&&(e.history.push("/order/".concat(u._id)),f({type:"ORDER_CREATE_RESET"}))}),[c,u,e.history,f]),r.a.createElement("div",null,r.a.createElement(T,{step1:!0,step2:!0,step3:!0,step4:!0}),r.a.createElement("div",{className:"row top"},r.a.createElement("div",{className:"col-2"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"card card-body"},r.a.createElement("h2",null,"Shipping"),r.a.createElement("p",null,r.a.createElement("strong",null,"Name: "),t.shippingAddress.fullName,r.a.createElement("br",null),r.a.createElement("strong",null,"Address: "),t.shippingAddress.address,", ",t.shippingAddress.city,","," ",t.shippingAddress.postalCode,","," ",t.shippingAddress.country))),r.a.createElement("li",null,r.a.createElement("div",{className:"card card-body"},r.a.createElement("h2",null,"Payment"),r.a.createElement("p",null,r.a.createElement("strong",null,"Method: "),t.paymentMethod))),r.a.createElement("li",null,r.a.createElement("div",{className:"card card-body"},r.a.createElement("h2",null,"Order Items"),r.a.createElement("ul",null,t.cartItems.map((function(e){return r.a.createElement("li",{key:e.product},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("img",{src:e.image,alt:e.name,className:"small"})),r.a.createElement("div",{className:"min-30"},r.a.createElement(o.b,{to:"/product/".concat(e.product)},e.name)),r.a.createElement("div",null,e.qty," x $",e.price," = $",e.qty*e.price)))}))))))),r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,"Order Summary")),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Items"),r.a.createElement("div",null,"$",t.itemsPrice.toFixed(2)))),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Shipping"),r.a.createElement("div",null,"$",t.shippingPrice.toFixed(2)))),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Tax"),r.a.createElement("div",null,"$",t.taxPrice.toFixed(2)))),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("strong",null,"Total")),r.a.createElement("div",null,r.a.createElement("strong",null,"$",t.totalPrice.toFixed(2))))),r.a.createElement("li",null,r.a.createElement("button",{type:"button",onClick:function(e){f(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,l,c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"ORDER_CREATE_REQUEST",payload:e}),t.prev=1,r=n(),l=r.userSignin.userInfo,t.next=5,p.a.post("/api/orders",e,{headers:{Authorization:"Bearer ".concat(l.token)}});case 5:c=t.sent,s=c.data,a({type:"ORDER_CREATE_SUCCESS",payload:s.order}),a({type:"CART_EMPTY"}),localStorage.removeItem("cartItems"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),a({type:"ORDER_CREATE_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,a){return t.apply(this,arguments)}}()}(Object(j.a)(Object(j.a)({},t),{},{orderItems:t.cartItems})))},className:"primary block",disabled:0===t.cartItems.length},"Place Order")),l&&r.a.createElement(O,null),i&&r.a.createElement(S,{variant:"danger"},i))))))}function D(e){var t=Object(s.b)(),a=e.match.params.id,l=Object(n.useState)(1),c=Object(R.a)(l,2),i=c[0],u=c[1],E=Object(s.c)((function(e){return e.productDetails})),f=E.loading,v=E.error,h=E.p;Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"PRODUCT_DETAILS_REQUEST",payload:e}),t.prev=1,t.next=4,p.a.get("/api/products/".concat(e));case 4:n=t.sent,r=n.data,a({type:"PRODUCT_DETAILS_SUCCESS",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:"PRODUCT_DETAILS_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(a))}),[t,a]);return r.a.createElement("div",null,f?r.a.createElement(O,null):v?r.a.createElement(S,{variant:"danger"},v):r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Back to Results"),r.a.createElement("div",{className:"row top"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{className:"large",src:h.image,alt:h.name})),r.a.createElement("div",{className:"col-1"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h1",null,h.name)),r.a.createElement("li",null,r.a.createElement(b,{rating:h.rating,numReviews:h.numReviews})),r.a.createElement("li",null,"Price: $",h.price),r.a.createElement("li",null,"Description: ",h.description))),r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Price"),r.a.createElement("div",null,"$",h.price))),r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Status"),r.a.createElement("div",null,h.countInStock>0?r.a.createElement("span",{className:"success"},"In Stock"):r.a.createElement("span",{className:"danger"},"Unavailable")))),h.countInStock>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Qty"),r.a.createElement("div",null,r.a.createElement("select",{value:i,onChange:function(e){return u(e.target.value)}},Object(g.a)(Array(h.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)})))))),r.a.createElement("li",null,r.a.createElement("button",{className:"primary block",onClick:function(){e.history.push("/cart/".concat(a,"?qty=").concat(i))}},"Add to Cart")))))))))}function U(){var e=Object(n.useState)(""),t=Object(R.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(R.a)(c,2),i=o[0],u=o[1],E=Object(n.useState)(""),f=Object(R.a)(E,2),v=f[0],g=f[1],h=Object(n.useState)(""),y=Object(R.a)(h,2),b=y[0],_=y[1],I=Object(s.b)(),N=Object(s.c)((function(e){return e.userSignin})).userInfo,C=Object(s.c)((function(e){return e.userDetails})),A=C.loading,T=C.error,w=C.user,j=Object(s.c)((function(e){return e.userUpdateProfile})),P=j.success,D=j.error,U=j.loading;Object(n.useEffect)((function(){var e;w?(l(w.name),u(w.email)):(I({type:"USER_UPDATE_PROFILE_RESET"}),I((e=N._id,function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,l,c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"USER_DETAILS_REQUEST",payload:{userId:e}}),r=n(),l=r.userSignin.userInfo,t.prev=2,t.next=5,p.a.get("/api/users/".concat(e),{headers:{Authorization:"Bearer ".concat(l.token)}});case 5:c=t.sent,s=c.data,a({type:"USER_DETAILS_SUCCESS",payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:"USER_DETAILS_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}())))}),[N._id,I,w]);return r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),v!==b?alert("Passwords do not match"):I(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,l,c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"USER_UPDATE_PROFILE_REQUEST",payload:{user:e}}),r=n(),l=r.userSignin.userInfo,t.prev=2,t.next=5,p.a.put("/api/users/profile",e,{headers:{Authorization:"Bearer ".concat(l.token)}});case 5:c=t.sent,s=c.data,a({type:"USER_UPDATE_PROFILE_SUCCESS",payload:s}),a({type:"USER_SIGNIN_SUCCESS",payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),a({type:"USER_UPDATE_PROFILE_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,a){return t.apply(this,arguments)}}()}({userId:w._id,name:a,email:i,password:v}))}},r.a.createElement("div",null,r.a.createElement("h1",null,"User Profile")),A?r.a.createElement(O,null):T?r.a.createElement(S,{variant:"danger"},T):r.a.createElement(r.a.Fragment,null,U&&r.a.createElement(O,null),D&&r.a.createElement(S,{variant:"danger"},D),P&&r.a.createElement(S,{variant:"success"},"Profile updated successfully"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{id:"name",type:"text",placeholder:"Enter name",value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",type:"email",placeholder:"Enter Email",value:i,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password",placeholder:"Enter Password",onChange:function(e){return g(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),r.a.createElement("input",{id:"confirmPassword",type:"password",placeholder:"Confirm Password",onChange:function(e){return _(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null),r.a.createElement("button",{type:"submit",className:"primary"},"Update")))))}function L(e){var t=Object(n.useState)(""),a=Object(R.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),u=Object(R.a)(i,2),E=u[0],f=u[1],v=Object(n.useState)(""),g=Object(R.a)(v,2),h=g[0],y=g[1],b=Object(n.useState)(""),_=Object(R.a)(b,2),I=_[0],N=_[1],C=e.location.search?e.location.search.split("=")[1]:"/",A=Object(s.c)((function(e){return e.userRegister})),T=A.userInfo,w=A.loading,j=A.error,P=Object(s.b)();return Object(n.useEffect)((function(){T&&e.history.push(C)}),[T,C,e.history]),r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),h!==I?alert("Password and confirm password do not match"):P(function(e,t,a){return function(){var n=Object(d.a)(m.a.mark((function n(r){var l,c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"USER_REGISTER_REQUEST",payload:{name:e,email:t,password:a}}),n.prev=1,n.next=4,p.a.post("/api/users/register",{name:e,email:t,password:a});case 4:l=n.sent,c=l.data,r({type:"USER_REGISTER_SUCCESS",payload:c}),r({type:"USER_SIGNIN_SUCCESS",payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),r({type:"USER_REGISTER_FAIL",payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()}(l,E,h))}},r.a.createElement("div",null,r.a.createElement("h1",null,"Create Account")),w&&r.a.createElement(O,null),j&&r.a.createElement(S,{variant:"danger"},j),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"name",id:"name",placeholder:"Enter Name",required:!0,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",id:"email",placeholder:"Enter email",required:!0,onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",placeholder:"Enter password",required:!0,onChange:function(e){return y(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),r.a.createElement("input",{type:"Password",id:"confirmPassword",placeholder:"Confirm password",required:!0,onChange:function(e){return N(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null),r.a.createElement("button",{className:"primary",type:"submit"},"Register")),r.a.createElement("div",null,r.a.createElement("label",null),r.a.createElement("div",null,"Already have an account?"," ",r.a.createElement(o.b,{to:"/signin?redirect=".concat(C)},"Sign In")))))}function k(e){Object(s.c)((function(e){return e.userSignin})).userInfo.length<=0&&e.history.push("/signin");var t=Object(s.c)((function(e){return e.cart})),a=t.cartItems,l=t.shippingAddress;a&&a.length<=0&&e.history.push("/home");var c=Object(n.useState)(l.fullName),o=Object(R.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)(l.address),d=Object(R.a)(m,2),E=d[0],p=d[1],f=Object(n.useState)(l.city),v=Object(R.a)(f,2),g=v[0],h=v[1],S=Object(n.useState)(l.country),y=Object(R.a)(S,2),b=y[0],_=y[1],O=Object(n.useState)(l.postalCode),I=Object(R.a)(O,2),N=I[0],C=I[1],A=Object(s.b)();return r.a.createElement("div",null,r.a.createElement(T,{step1:!0,step2:!0}),r.a.createElement("form",{className:"form",onSubmit:function(t){var a;t.preventDefault(),A((a={fullName:i,address:E,city:g,country:b,postalCode:N},function(e){e({type:"CART_SAVE_SHIPPING_ADDRESS",payload:a}),localStorage.setItem("shippingAddress",JSON.stringify(a))})),e.history.push("/payment")}},r.a.createElement("div",null,r.a.createElement("h1",null,"Shipping Address")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"fullName"},"Full Name"),r.a.createElement("input",{type:"text",id:"fullName",placeholder:"Enter Full Name",value:i,onChange:function(e){return u(e.target.value)},required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",id:"address",placeholder:"Enter Address",value:E,onChange:function(e){return p(e.target.value)},required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{type:"text",id:"city",placeholder:"Enter City",value:g,onChange:function(e){return h(e.target.value)},required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"country"},"Country"),r.a.createElement("input",{type:"text",id:"country",placeholder:"Enter Country",value:b,onChange:function(e){return _(e.target.value)},required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"postalCode"},"Postal Code"),r.a.createElement("input",{type:"text",id:"postalCode",placeholder:"Enter Postal Code",value:N,onChange:function(e){return C(e.target.value)},required:!0})),r.a.createElement("div",null,r.a.createElement("label",null),r.a.createElement("button",{className:"primary"},"Continue"))))}function x(e){var t=Object(s.c)((function(e){return e.userSignin})),a=t.userInfo,l=t.loading,c=t.error,i=e.location.search?e.location.search.split("=")[1]:"/",u=Object(n.useState)(""),E=Object(R.a)(u,2),f=E[0],v=E[1],g=Object(n.useState)(""),h=Object(R.a)(g,2),y=h[0],b=h[1],_=Object(s.b)();return Object(n.useEffect)((function(){a&&a._id&&e.history.push(i)}),[a,i,e.history]),r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),_(function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){var r,l;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"USER_SIGNIN_REQUEST",payload:{email:e,password:t}}),a.prev=1,a.next=4,p.a.post("/api/users/signin",{email:e,password:t});case 4:r=a.sent,l=r.data,n({type:"USER_SIGNIN_SUCCESS",payload:l}),localStorage.setItem("userInfo",JSON.stringify(l)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:"USER_SIGNIN_FAIL",payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()}(f,y))}},r.a.createElement("div",null,r.a.createElement("h1",null,"Sign In")),l&&r.a.createElement(O,null),c&&r.a.createElement(S,{variant:"danger"},c),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",id:"email",placeholder:"Enter email",required:!0,onChange:function(e){return v(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",placeholder:"Enter password",required:!0,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null),r.a.createElement("button",{className:"primary",type:"submit"},"Sign In")),r.a.createElement("div",null,r.a.createElement("label",null),r.a.createElement("div",null,"New Customer?"," ",r.a.createElement(o.b,{to:"/register?redirect=".concat(i)},"Create your account")))))}var F=function(){var e=Object(s.c)((function(e){return e.cart})).cartItems,t=Object(s.c)((function(e){return e.userSignin})).userInfo,a=Object(s.b)();return r.a.createElement(o.a,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("header",{className:"row"},r.a.createElement("div",null,r.a.createElement(o.b,{className:"brand",to:"/"},"HAmazon")),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/cart"},"Cart",e.length>0&&r.a.createElement("span",{className:"badge"},e.length)),t&&t._id?r.a.createElement("div",{className:"dropdown"},r.a.createElement(o.b,{to:"#"},t.name," ",r.a.createElement("i",{className:"fa fa-caret-down"})," "),r.a.createElement("ul",{className:"dropdown-content"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/orderhistory"},"Order History")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"#signout",onClick:function(){a((function(e){localStorage.removeItem("userInfo"),localStorage.removeItem("cartItems"),localStorage.removeItem("shippingAddress"),localStorage.removeItem("paymentMethod"),e({type:"USER_SIGNOUT"})}))}},"Sign Out")))):r.a.createElement(o.b,{to:"/signin"},"Sign In"),t&&t.isAdmin&&r.a.createElement("div",{className:"dropdwon"},r.a.createElement(o.b,{to:"#admin"},"Admin ",r.a.createElement("i",{className:"fa fa-caret-down"})),r.a.createElement("ul",{className:"dropdown-content"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/productlist"},"Products")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/orderlist"},"Orders")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/users"},"Users")))))),r.a.createElement("main",null,r.a.createElement(i.b,{path:"/cart/:id?",exact:!0,component:y}),r.a.createElement(i.b,{path:"/product/:id",component:D}),r.a.createElement(i.b,{path:"/signin",component:x}),r.a.createElement(i.b,{path:"/register",component:L}),r.a.createElement(i.b,{path:"/shipping",component:k}),r.a.createElement(i.b,{path:"/payment",component:w}),r.a.createElement(i.b,{path:"/placeorder",component:P}),r.a.createElement(i.b,{path:"/order/:id",component:C}),r.a.createElement(i.b,{path:"/orderhistory",component:A}),r.a.createElement(v,{path:"/profile",component:U}),r.a.createElement(i.b,{path:"/home",exact:!0,component:I}),r.a.createElement(i.b,{path:"/",exact:!0,component:I})),r.a.createElement("footer",{className:"row center"},"All rights reserved")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(16),q=a(39),Q={userSignin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):[]},cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):[]}},G=Object(M.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_LIST_REQUEST":return{loading:!0};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:t.payload};case"PRODUCT_LIST_FAIL":return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,p:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DETAILS_REQUEST":return{loading:!0};case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,p:t.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD_ITEM":var a=t.payload,n=e.cartItems.find((function(e){return e.product===a.product}));return n?Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?a:e}))}):Object(j.a)(Object(j.a)({},e),{},{cartItems:[].concat(Object(g.a)(e.cartItems),[a])});case"CART_REMOVE_ITEM":return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case"CART_SAVE_SHIPPING_ADDRESS":return Object(j.a)(Object(j.a)({},e),{},{shippingAddress:t.payload});case"CART_SAVE_PAYMENT_METHOD":return Object(j.a)(Object(j.a)({},e),{},{paymentMethod:t.payload});case"CART_EMPTY":return Object(j.a)(Object(j.a)({},e),{},{cartItems:[]});default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SIGNIN_REQUEST":return{loading:!0};case"USER_SIGNIN_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_SIGNIN_FAIL":return{loading:!1,error:t.payload};case"USER_SIGNOUT":return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:t.payload};default:return e}},orderCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_CREATE_REQUEST":return{loading:!0};case"ORDER_CREATE_SUCCESS":return{loading:!1,success:!0,order:t.payload};case"ORDER_CREATE_FAIL":return{loading:!1,error:t.payload};case"ORDER_CREATE_RESET":return{};default:return e}},orderDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_DETAILS_REQUEST":return{loading:!0};case"ORDER_DETAILS_SUCCESS":return{loading:!1,order:t.payload};case"ORDER_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},orderPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_PAY_REQUEST":return{loading:!0};case"ORDER_PAY_SUCCESS":return{loading:!1,success:!0};case"ORDER_PAY_FAIL":return{loading:!1,error:t.payload};case"ORDER_PAY_RESET":return{};default:return e}},orderMineList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_MINE_LIST_REQUEST":return{loading:!0};case"ORDER_MINE_LIST_SUCCESS":return{loading:!1,orders:t.payload};case"ORDER_MINE_LIST_FAIL":return{loading:!1,error:t.payload};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_DETAILS_REQUEST":return{loading:!0};case"USER_DETAILS_SUCCESS":return{loading:!1,user:t.payload};case"USER_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_UPDATE_PROFILE_REQUEST":return{loading:!0};case"USER_UPDATE_PROFILE_SUCCESS":return{loading:!1,success:!0};case"USER_UPDATE_PROFILE_FAIL":return{loading:!1,error:t.payload};case"USER_UPDATE_PROFILE_RESET":return{};default:return e}}}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d,Y=Object(M.e)(G,Q,$(Object(M.a)(q.a)));c.a.render(r.a.createElement(s.a,{store:Y},r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ebc29bfb.chunk.js.map