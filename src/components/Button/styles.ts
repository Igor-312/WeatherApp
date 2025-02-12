import styled from '@emotion/styled';

interface MainButtonStyledProps {
  disabled: boolean;
  $isRed: boolean;
}

export const MainButton = styled.button<MainButtonStyledProps>`
width: 146;
height: 48;
gap: 10px;
color: rgba(255, 255, 255, 1);
border-radius: 50px;
padding-top: 12px;
padding-right: 40px;
padding-bottom: 12px;
padding-left: 40px;
background:${({ disabled, $isRed }) => disabled ? '#bebec7' : $isRed ? '#f02e0c' : 'rgba(54, 120, 180, 1)'};

`
