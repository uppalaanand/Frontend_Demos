### Complete setup React

    1. npm create vite@latest
    2. y
    3. project name : .
    4. framework : React
    5. varient : JavaScript
    6. beta : no
    7. if npm : Yes

JSX => Javascript Extension

### React hooks
    1. If the state does not depend on previous value then just pass like setConter(counter+1)
    2. setCounter(prev=>prev+1)

### Date : 24-02-2026
### React Forms
    1. npm install react-hook-form      =>      for dealing with form submissions
    2. import {useForm} from 'react-hook-form'      =>      to submit form, To handle Errors
    3. two properties are required from above useForm to extract thet
            const {register, handleSubmit} = useForm();
            To Use : {...register("username")}          => Takes name of the input field as an argument and returns one object
                                    |
                                <input key value>

In the form we specify button type as submit, so we mention one property in form tag i.e, onSubmit={handleSubmit(<Submit-Function>)}


Rules of Validation:
    required        =>      makes field mandatory
    minLength & maxLength   =>  For Strings
    min & max   =>  For number
    pattern     =>  regular expressions(password)

    1. {...register("username", {<required> : true})}
    2. const { register, handleSubmit, setError, formState : {errors}} = useForm();
                                                |
                                            To handle Or display the errors

    === the date id not after 2020
    setError("dob", {
        type : "manual",
        message : "Date not after 2020"
    });
    ===>    {errors.dob?.type === "manual" && <p>{errors.dob.message}</p>}



### Lifting state up
    This can be used when we only have one level(Ex : only direct parent-child relation).
                        Root Component
                       /       |        \
                    A          B           C
                  /           /           /  \  
                D           E           F     \ 
                                                G

### Task Management System

tasks :
    handleAddNewTask()
    handleDeletetask()
    handleUpdatetask()

                          Manage Tasks
                       /      |         \
                AddTask    TasksList   TasksCount

Extension for boiler plate of react component : ES7+snippets
        rfcs+Enter


### useEffect hook

===    Side Effects before useEffect Hook    ===

1. A component can render initially, before displaying content.
2. If the component is about to make an api request, it should wait until the initial rendering is completed.
3. If both initial rendering and API request happen together, it leads to unexpected bugs in the application.

1. No dependency array(second argument) - runs after every render
            useEffect(() => {side effect})

2. With dependencies - runs when dependencies change
            useEffect(() => {side effect}, [ dependencies ])

3. With Optional cleanup function
            useEffect(() => {}, )

Test API's Mock Data    :   https://jsonplaceholder.typicode.com/users
    
    


