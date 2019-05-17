import React, {Component} from "react";
import {connect} from "react-redux";
import {
  Angel,
  ArrowLeft,
  ArrowRight,
  Box,
  Container,
  Di,
  Header,
  HeaderText,
  Label,
  LeftEye,
  NewWapper,
  Num,
  Option,
  OptionContainer,
  Question,
  QuestionLogo,
  QustionContent,
  RightEye,
  SwitchBtn,
  SwitchText,
  Text,
  Ti
} from "./style";
import "animate.css";
import {actionCreator} from "./store";

const tag = ["A", "B", "C", "D"]

class newpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }

  next() {
    this.setState({num: this.state.num + 1})
  }

  back() {
    this.setState({num: this.state.num - 1})
  }

  render() {
    return (
      <NewWapper>
        <Container>
          {this.props.new.map(item => (
            <Container key={item.index}>
              <Box className={this.state.num >= item.index ?
                "animated fadeOutLeft fast" :
                "animated fadeInLeft fast"
              }>
                <Header>
                  <HeaderText>
                    <Di/>
                    <Num num={item.index}/>
                    <Ti/>
                  </HeaderText>
                  <Angel/>
                  <QuestionLogo/>
                  <LeftEye/>
                  <RightEye/>
                </Header>
                <Question>
                  <QustionContent>{item.question}</QustionContent>
                </Question>
                <OptionContainer>
                  {item.options.map((ele, index) => {
                    return (
                      <Option key={ele}>
                        <Label>{tag[index]}</Label>
                        <Text>{ele}</Text>
                      </Option>
                    );
                  })}
                </OptionContainer>
                <SwitchBtn>
                  <SwitchText>换一题</SwitchText>
                </SwitchBtn>
              </Box>
            </Container>
          ))}
        </Container>
        <Container>
          <ArrowLeft onClick={() => this.back()}/>
          <ArrowRight onClick={() => this.next()}/>
        </Container>
      </NewWapper>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    ChangeQusetion(e) {
      dispatch(actionCreator.changeSheetAsyncAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newpage);
