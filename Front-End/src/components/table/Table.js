import React, { useEffect, useState } from "react";
import { Container, Th, BtnAction, AlignCenter, Image, TableData, TableDataNotFound } from "./styles";
import { axiosAPI } from "../../service/axios.api";
import { CardService } from "../../service/card.service";

const cardService = new CardService();

const Table = ({ filter }) => {
  const [albums, setAlbums] = useState([]);
  let albumsWithFilter = cardService.handleInputFilter(filter, albums);

  useEffect(() => {
      axiosAPI.get("/albums")
      .then((data) => setAlbums(data.data))
      .catch((error) => console.log(`Erro: ${ error }`));
  }, []);
  
  return (
    <Container>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <Th scope="col" className="text-center">Image</Th>
            <Th scope="col" className="text-center">Title</Th>
            <Th scope="col" className="text-center">Artist</Th>
            <Th scope="col" className="text-center">Price</Th>
            <Th scope="col" className="text-center">Old Price</Th>
            <Th scope="col" className="text-center">Category</Th>
            <Th scope="col" className="text-center">Update</Th>
            <Th scope="col" className="text-center">Delete</Th>
          </tr>
        </thead>
        <tbody>
          {
            albumsWithFilter ? 
              albumsWithFilter.length !== 0 ?
                albumsWithFilter.map(album =>
                  <tr key={ album.id }>
                    <td className="text-center align-middle">
                      <Image src={album.image} alt="Album Art"/>
                    </td>
                    <td>
                      <AlignCenter>
                        <TableData>
                          { album.title }
                        </TableData>
                      </AlignCenter>
                    </td>
                    <td>
                      <AlignCenter>
                        <TableData>
                          { album.artist }
                        </TableData>
                      </AlignCenter>
                    </td>
                    <td>
                      <AlignCenter>
                        <TableData>
                          $ { album.price }
                        </TableData>
                      </AlignCenter>
                    </td>
                    <td>
                      <AlignCenter>
                        <TableData>
                          $ { album.oldPrice }
                        </TableData>
                      </AlignCenter>
                    </td>
                    <td>
                      <AlignCenter>
                        <TableData className="category">
                          { album.category.title }
                        </TableData>
                      </AlignCenter>
                    </td>
                    <td className="text-center align-middle">
                      <BtnAction width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="30" fill="#4200FF" fillOpacity="0.5" />
                        <path d="M30.0081 47.7692C28.5344 47.7692 27.1417 46.8623 26.1862 45.2753L24.8583 43.0729C24.3725 42.2632 24 40.9352 24 39.9959V18.9919C24 15.6883 26.6883 13 29.9919 13C33.2955 13 35.9838 15.6883 35.9838 18.9919V39.9798C35.9838 40.919 35.6113 42.247 35.1255 43.0567L33.7976 45.2591C32.8745 46.8623 31.4818 47.7692 30.0081 47.7692ZM30.0081 15.4291C28.0486 15.4291 26.4453 17.0324 26.4453 18.9919V39.9798C26.4453 40.4818 26.6883 41.3725 26.9474 41.8097L28.2753 44.0121C28.7773 44.8542 29.4089 45.3239 30.0081 45.3239C30.6073 45.3239 31.2389 44.8381 31.7409 44.0121L33.0688 41.8097C33.3279 41.3725 33.5708 40.4818 33.5708 39.9798V18.9919C33.5708 17.0324 31.9676 15.4291 30.0081 15.4291Z" fill="white" />
                        <path d="M34.7854 23.5258H25.2146C24.5506 23.5258 24 22.9752 24 22.3113C24 21.6473 24.5506 21.0967 25.2146 21.0967H34.7854C35.4494 21.0967 36 21.6473 36 22.3113C36 22.9752 35.4494 23.5258 34.7854 23.5258Z" fill="white" />
                      </BtnAction>
                    </td>
                    <td className="text-center align-middle">
                      <BtnAction width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="30" fill="#FF0000" fillOpacity="0.5"/>
                        <path d="M43.8559 20.4315C43.8251 20.4315 43.7789 20.4315 43.7328 20.4315C35.5931 19.616 27.4689 19.3082 19.4215 20.1237L16.2826 20.4315C15.6364 20.493 15.0671 20.0314 15.0055 19.3852C14.944 18.7389 15.4056 18.185 16.0364 18.1235L19.1753 17.8157C27.3612 16.9848 35.6547 17.308 43.9636 18.1235C44.5944 18.185 45.056 18.7543 44.9945 19.3852C44.9483 19.9853 44.4406 20.4315 43.8559 20.4315Z" fill="white"/>
                        <path d="M24.624 18.8779C24.5624 18.8779 24.5009 18.8779 24.4239 18.8625C23.8085 18.7548 23.3776 18.1547 23.4853 17.5393L23.8239 15.5236C24.07 14.0464 24.4085 12 27.9936 12H32.025C35.6255 12 35.964 14.1234 36.1948 15.539L36.5333 17.5393C36.641 18.1701 36.2102 18.7702 35.5947 18.8625C34.9639 18.9702 34.3638 18.5394 34.2715 17.9239L33.9329 15.9236C33.7175 14.585 33.6714 14.3234 32.0404 14.3234H28.009C26.3781 14.3234 26.3473 14.5388 26.1165 15.9083L25.7626 17.9085C25.6703 18.4779 25.1779 18.8779 24.624 18.8779Z" fill="white"/>
                        <path d="M34.948 45.0813H25.0696C19.6996 45.0813 19.4842 42.1117 19.315 39.7113L18.3148 24.2167C18.2687 23.5859 18.761 23.0319 19.3919 22.9858C20.0382 22.955 20.5767 23.432 20.6229 24.0629L21.623 39.5574C21.7923 41.8962 21.8538 42.7733 25.0696 42.7733H34.948C38.1793 42.7733 38.2408 41.8962 38.3947 39.5574L39.3948 24.0629C39.441 23.432 39.9949 22.955 40.6258 22.9858C41.2566 23.0319 41.749 23.5705 41.7028 24.2167L40.7027 39.7113C40.5334 42.1117 40.318 45.0813 34.948 45.0813Z" fill="white"/>
                        <path d="M32.5625 36.6186H27.4387C26.8078 36.6186 26.2847 36.0954 26.2847 35.4646C26.2847 34.8337 26.8078 34.3105 27.4387 34.3105H32.5625C33.1934 34.3105 33.7165 34.8337 33.7165 35.4646C33.7165 36.0954 33.1934 36.6186 32.5625 36.6186Z" fill="white"/>
                        <path d="M33.8549 30.4643H26.1615C25.5306 30.4643 25.0074 29.9411 25.0074 29.3103C25.0074 28.6794 25.5306 28.1562 26.1615 28.1562H33.8549C34.4857 28.1562 35.0089 28.6794 35.0089 29.3103C35.0089 29.9411 34.4857 30.4643 33.8549 30.4643Z" fill="white"/>
                      </BtnAction>
                    </td>
                  </tr>
                )
              :
              <tr>
                <TableDataNotFound colspan="8" className="text-center align-middle">No albums found...</TableDataNotFound>
              </tr>
            :
              albums.map(album => 
                <tr key={ album.id }>
                  <td className="text-center align-middle">
                    <Image src={album.image} alt="Album Art"/>
                  </td>
                  <td>
                    <AlignCenter>
                      <TableData>
                        { album.title }
                      </TableData>
                    </AlignCenter>
                  </td>
                  <td>
                    <AlignCenter>
                      <TableData>
                        { album.artist }
                      </TableData>
                    </AlignCenter>
                  </td>
                  <td>
                    <AlignCenter>
                      <TableData>
                        $ { album.price }
                      </TableData>
                    </AlignCenter>
                  </td>
                  <td>
                    <AlignCenter>
                      <TableData>
                        $ { album.oldPrice }
                      </TableData>
                    </AlignCenter>
                  </td>
                  <td>
                    <AlignCenter>
                      <TableData className="category">
                        { album.category.title }
                      </TableData>
                    </AlignCenter>
                  </td>
                  <td className="text-center align-middle">
                    <BtnAction width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="30" fill="#4200FF" fillOpacity="0.5" />
                      <path d="M30.0081 47.7692C28.5344 47.7692 27.1417 46.8623 26.1862 45.2753L24.8583 43.0729C24.3725 42.2632 24 40.9352 24 39.9959V18.9919C24 15.6883 26.6883 13 29.9919 13C33.2955 13 35.9838 15.6883 35.9838 18.9919V39.9798C35.9838 40.919 35.6113 42.247 35.1255 43.0567L33.7976 45.2591C32.8745 46.8623 31.4818 47.7692 30.0081 47.7692ZM30.0081 15.4291C28.0486 15.4291 26.4453 17.0324 26.4453 18.9919V39.9798C26.4453 40.4818 26.6883 41.3725 26.9474 41.8097L28.2753 44.0121C28.7773 44.8542 29.4089 45.3239 30.0081 45.3239C30.6073 45.3239 31.2389 44.8381 31.7409 44.0121L33.0688 41.8097C33.3279 41.3725 33.5708 40.4818 33.5708 39.9798V18.9919C33.5708 17.0324 31.9676 15.4291 30.0081 15.4291Z" fill="white" />
                      <path d="M34.7854 23.5258H25.2146C24.5506 23.5258 24 22.9752 24 22.3113C24 21.6473 24.5506 21.0967 25.2146 21.0967H34.7854C35.4494 21.0967 36 21.6473 36 22.3113C36 22.9752 35.4494 23.5258 34.7854 23.5258Z" fill="white" />
                    </BtnAction>
                  </td>
                  <td className="text-center align-middle">
                    <BtnAction width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="30" fill="#FF0000" fillOpacity="0.5"/>
                      <path d="M43.8559 20.4315C43.8251 20.4315 43.7789 20.4315 43.7328 20.4315C35.5931 19.616 27.4689 19.3082 19.4215 20.1237L16.2826 20.4315C15.6364 20.493 15.0671 20.0314 15.0055 19.3852C14.944 18.7389 15.4056 18.185 16.0364 18.1235L19.1753 17.8157C27.3612 16.9848 35.6547 17.308 43.9636 18.1235C44.5944 18.185 45.056 18.7543 44.9945 19.3852C44.9483 19.9853 44.4406 20.4315 43.8559 20.4315Z" fill="white"/>
                      <path d="M24.624 18.8779C24.5624 18.8779 24.5009 18.8779 24.4239 18.8625C23.8085 18.7548 23.3776 18.1547 23.4853 17.5393L23.8239 15.5236C24.07 14.0464 24.4085 12 27.9936 12H32.025C35.6255 12 35.964 14.1234 36.1948 15.539L36.5333 17.5393C36.641 18.1701 36.2102 18.7702 35.5947 18.8625C34.9639 18.9702 34.3638 18.5394 34.2715 17.9239L33.9329 15.9236C33.7175 14.585 33.6714 14.3234 32.0404 14.3234H28.009C26.3781 14.3234 26.3473 14.5388 26.1165 15.9083L25.7626 17.9085C25.6703 18.4779 25.1779 18.8779 24.624 18.8779Z" fill="white"/>
                      <path d="M34.948 45.0813H25.0696C19.6996 45.0813 19.4842 42.1117 19.315 39.7113L18.3148 24.2167C18.2687 23.5859 18.761 23.0319 19.3919 22.9858C20.0382 22.955 20.5767 23.432 20.6229 24.0629L21.623 39.5574C21.7923 41.8962 21.8538 42.7733 25.0696 42.7733H34.948C38.1793 42.7733 38.2408 41.8962 38.3947 39.5574L39.3948 24.0629C39.441 23.432 39.9949 22.955 40.6258 22.9858C41.2566 23.0319 41.749 23.5705 41.7028 24.2167L40.7027 39.7113C40.5334 42.1117 40.318 45.0813 34.948 45.0813Z" fill="white"/>
                      <path d="M32.5625 36.6186H27.4387C26.8078 36.6186 26.2847 36.0954 26.2847 35.4646C26.2847 34.8337 26.8078 34.3105 27.4387 34.3105H32.5625C33.1934 34.3105 33.7165 34.8337 33.7165 35.4646C33.7165 36.0954 33.1934 36.6186 32.5625 36.6186Z" fill="white"/>
                      <path d="M33.8549 30.4643H26.1615C25.5306 30.4643 25.0074 29.9411 25.0074 29.3103C25.0074 28.6794 25.5306 28.1562 26.1615 28.1562H33.8549C34.4857 28.1562 35.0089 28.6794 35.0089 29.3103C35.0089 29.9411 34.4857 30.4643 33.8549 30.4643Z" fill="white"/>
                    </BtnAction>
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>
    </Container>
  );
}

export { Table };