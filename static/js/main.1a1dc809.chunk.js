(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={button:"ContactList_button__2JDZ4",contact:"ContactList_contact__cNqGP"}},11:function(t,e,n){t.exports={container:"App_container__2sdSz",wrapper:"App_wrapper__bBD7Z"}},14:function(t,e,n){t.exports={input_display:"Filter_input_display__2zBCF"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),o=n.n(c),i=n(15),s=n(5),l=n(6),u=n(8),d=n(7),p=n(13),m=n(3),b=n.n(m),h=n(2),j=n.n(h),f=n(0),_=j.a.generate(),C=j.a.generate(),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(p.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:b.a.wrapper,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{htmlFor:_,children:["Name",Object(f.jsx)("input",{className:b.a.input_display,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:_,onChange:this.handleChange})]}),Object(f.jsxs)("label",{htmlFor:C,children:["Number",Object(f.jsx)("input",{className:b.a.input_display,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:C,onChange:this.handleChange})]}),Object(f.jsx)("button",{className:b.a.button_prime,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),x=n(10),y=n.n(x),g=function(t){var e=t.phoneBook,n=t.onDeleteContact;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsxs)("li",{className:y.a.contact,children:[t.name,": ",t.number,Object(f.jsx)("button",{className:y.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})},v=n(14),A=n.n(v),S=function(t){var e=t.onChange;return Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{className:A.a.input_display,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e})]})},w=n(11),F=n.n(w),N=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,r={name:n,number:a,id:j.a.generate()};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):""===n?alert("Please fill out the form it is empty."):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[r])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.searchByFilter=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.searchByFilter();return Object(f.jsx)("div",{className:F.a.container,children:Object(f.jsxs)("div",{className:F.a.wrapper,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(S,{onChange:this.handleFilter}),0!==this.state.contacts.length&&Object(f.jsx)(g,{phoneBook:t,onDeleteContact:this.deleteContact})]})})}}]),n}(a.Component);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={wrapper:"ContactForm_wrapper__1cauI",input_display:"ContactForm_input_display__yBz5r",button_prime:"ContactForm_button_prime__1T_tA"}}},[[29,1,2]]]);
//# sourceMappingURL=main.1a1dc809.chunk.js.map