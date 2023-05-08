import styled from '@emotion/styled';

export const SearchField = styled.div`
  height: 100vh;
  padding: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const SearchInput = styled.input`
  width: 50%;
  height: 50px;
  padding: 8px;
  border: none;
  outline: none;
  margin-bottom: 32px;
  border-radius: 5px;
  font-size: 1rem;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const CityStyles = styled.p`
  font-family: 'Aclonica', sans-serif;
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
`;

export const TempStyles = styled.p`
  font-family: 'Aclonica', sans-serif;
  font-size: 10rem;
`;

export const DateStyles = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  padding-left: 16px;
  text-align: center;
`;

export const Locations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #028465;
  font-family: 'Aclonica', sans-serif;
  background-color: #ffffff77;
  border-radius: 50px 50px 0px 0px;
  height: 300px;
  padding: 32px;
`;

export const OtherLocation = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  height: 90px;
  border-bottom: 1px solid #028465;
  align-items: end;
`;

export const OtherLocationTemp = styled.p`
  font-size: 2rem;
`;
