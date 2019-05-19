import styled from 'styled-components'
import outline from './img/outline.svg'
import btnred from './img/btn-red.svg'
import btnblack from './img/btn-black.svg'

export const HomeWarpper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 10px rgba(58,58,58,.27))
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Box = styled.div`
  height: 328px;
  width: 311px;
  background: url(${outline}) no-repeat;
  margin-bottom: 36px;
`

export const Logo = styled.img.attrs({
  src: 'https://ncustatic.ncuos.com/index/1558266589924.rsafcaasdsa.png'
})`
  height: 66px;
  width: 228px;
  position: relative;
  top: -30px;
  left: 13%;
`

export const Btnred = styled.div`
  height: 76px;
  width: 206px;
  background: url(${btnred});
  font-size: 23px;
  font-weight: bold;
  line-height: 76px;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
`

export const Btnblack = styled.div`
  height: 58px;
  width: 193px;
  margin-top: 5px;
  background: url(${btnblack});
  font-size: 16px;
  font-weight: bold;
  line-height: 58px;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
`

export const Name = styled.div`
  position: relative;
  width: 200px;
  font-size: 23px;
  top: 217px;
  text-align: center;
  color: #2e2e2e;
  margin: auto;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`
