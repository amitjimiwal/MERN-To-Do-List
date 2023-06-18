const auth=async(method,data={})=>{
    //function for login and register and logout
try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/${method.toLowerCase()}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
          credentials:"include"
        }
      );
      // getting the resposne
     const jsonresponse= await response.json()
     return jsonresponse;

    } catch (error) {
      console.log(error)
    }
}

export default auth;