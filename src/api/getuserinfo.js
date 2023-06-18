const getuserInfo = async () => {
    try{
      const {data}= await(`${process.env.REACT_APP_BACKEND_BASE_URL}/me`,{
            // added to read the cookies when making requests
            withCredentials:true
          })
          console.log(data)
          return data;
    }
    catch(error){
      return new Error(error.response.data.message)
    }
};

export default getuserInfo;
