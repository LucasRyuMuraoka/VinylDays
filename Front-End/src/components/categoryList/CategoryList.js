import { axiosAPI } from "../../service/axios.api";
import { useEffect, useState } from "react";
import { CategoryService } from "../../service/category.service";
import { Category } from "../category/Category";
import { Container } from "./styles";

const categoryService = new CategoryService();

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosAPI.get("/albums").then(albums => {
      const allCategories = albums.data.map(album => album.category);
      const finalCategories = categoryService.arrayWithoutDuplicatedValues(allCategories);
      
      setCategories(finalCategories);
    })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      {
        categories.map( category => <Category key={ category } title={ category }/> )
      }
    </Container>
  );
}
