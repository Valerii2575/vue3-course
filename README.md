# vue3-course

### Vue fundamentals

Inside the script tag here we need to create a Vue application.
Or basically we need to create a method to instantiate or initialize Vue in our application.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="vue3Demo">
        <h1>{{ message}}</h1>
    </div>
</body>
<script>
    const { createApp} = Vue;

    createApp({
        setup(){
            return {
                message: "Hello Vue 3",
            }
        }
    }).mount("#vue3Demo")
</script>
</html>
```

Writing methods or function.
Method is a terminology that was used when you were working with options API.
We will create that function inside the setup method that we have.

```
function getRandomLuckyNumber(){
    return Math.floor(Math.random()*10) + 1;
};
```

The beauty that is there is when something is updated, it should automatically render the Dom and reflect that change.
In order to accomplish that in view, we have something called as ref.
Refs are best suited for accessing and manipulating the Dom elements directly.

```
const { createApp, ref} = Vue;
createApp({
        setup(){
            const message = "Hello Vue 3";
            const luckyNumber = ref(7);
            ...
        }
})
```

### Directives in Vue

Directives apply special reactive behavior to the rendered Dom and they are basically like HTML attributes
which are added inside the HTML template.
They all start with v hyphen to indicate that it is a special view attribute.

- v-html

```
<span v-html="getMessage()"></span>
function getMessage(){
    return `<h1>${message}</h1>`
}
```

- v-once - that means this particular tag will be rendered only once.
            Even if the value is updated, it will not be rendered in the Dom.

```
<p v-once>Lucky number: {{ getRandomLuckyNumber() }}</p>
```

- v-bind  - 
- cleanup - 
- v-show - 
    ```
    <div v-show="employee.isHasCreditCard">
    ```

- v-if -
- v-else v-else-if
    ```
        <p v-if="employee.isHasCorporasteCard">Corporate balance: {{ employee.corporateBalance}}</p>
        <p v-else>Doesn't has corporate card</p>
    ```
- v-for
    ```
    <p v-for="number in luckyNumbers">Number: {{number}}</p>
    const luckyNumbers = [3, 7, 9, 11];
    ```
- iterate over array of object
    ```
        <ul>
            <li v-for="(project, index) in employee.projects">{{++index}}. {{project.project}} - {{project.timeline}}</li>
        </ul>
    ```

- key value in an object
    ```
        <ul>
            <li v-for="(value, key) in employee">
                <span>{{key}}: {{value}}</span>
            </li>
        </ul>

        name: John
        age: 30
        salary: 30000
        corporateBalance: 100000
        isHasCreditCard: true
        isHasCorporasteCard: false
        projects: [ { "project": "Grean A", "timeline": "2 years" }, { "project": "Grean B", "timeline": "3 years" }, { "project": "Grean C", "timeline": "9 years" } ]
    ```
