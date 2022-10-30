import styled from 'styled-components'
export const FooterWarpper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 15px 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.name ? '#00848A': "#000"};
  cursor: pointer;

  .text {
    margin-right: 5px;
  }

  &:hover {
    .text {
      text-decoration: underline;
    }
  }
`