import { useEffect, useState } from "react";

export const useGetBlogData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("https://gorest.co.in/public/v2/posts");
        const responseData = await response.json();
        console.log(responseData)
        setData(responseData)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export const useGetCommentsData = ({ postId }: { postId: string }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the news article based on its id to get the pathSlug
        const response = await fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`);
        const responseDataId = await response.json();   
        setData(responseDataId)

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (postId) {
      fetchData();
    }
  }, [postId]);

  return {
    data,
    loading,
  };
};


export const useGetUserData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  const getUserData = async () => {
      setLoading(true);

      const myHeaders = new Headers();
      myHeaders.append(
          "Authorization",
          "Bearer 131008b563bcd02c53757afc786b47ff57bcc382477caeb37f0bfae660ef5a80"
      );

      try {
          const response = await fetch("https://gorest.co.in/public/v2/users",{ 
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          });
          const result = await response.json(); 
          setData(result);
          console.log(result);
      } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      getUserData();
  }, []); 

  return {
      loading,
      data,
  };
};


  export const useDeleteUserData = () => {
    const [loading, setLoading] = useState(false);
  
    const deleteUserData = async (userId:any) => {
      setLoading(true);
  
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer 131008b563bcd02c53757afc786b47ff57bcc382477caeb37f0bfae660ef5a80"
      );

      try {
        const response = await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
          method: "DELETE",
          redirect: "follow",
          headers: myHeaders,
        });

        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return {
      loading,
      deleteUserData,
    };
  };
  
  export const useUpdateUserData = () => {
    const [loading, setLoading] = useState(false);
  
    const updateUserData = async (userId:any, userName:string, userEmail:string, userGender:string, userStatus:string) => {
      setLoading(true);
  
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer 131008b563bcd02c53757afc786b47ff57bcc382477caeb37f0bfae660ef5a80"
      );
      
      try {
        const response = await fetch(`https://gorest.co.in/public/v2/users/${userId}?name=${userName}&email=${userEmail}&gender=${userGender}&status=${userStatus}`, {
          method: "PUT",
          redirect: "follow",
          headers: myHeaders,
        });

        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return {
      loading,
      updateUserData,
    };
  };
  
  
  export const useCreateUserData = () => {
    const [loading, setLoading] = useState(false);
  
    const createUserData = async (userName:string, userEmail:string, userGender:string, userStatus:string) => {
      setLoading(true);
  
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer 131008b563bcd02c53757afc786b47ff57bcc382477caeb37f0bfae660ef5a80"
      );
      
      try {
        const response = await fetch(`https://gorest.co.in/public/v2/users/?name=${userName}&email=${userEmail}&gender=${userGender}&status=${userStatus}`, {
          method: "POST",
          redirect: "follow",
          headers: myHeaders,
        });

        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return {
      loading,
      createUserData,
    };
  };
  