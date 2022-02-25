import styled from "styled-components";

function Review(props) {
  // const { photo } = props.feedback;
  const { position, review, name, image } = props.feedback;
  // const { photo, name } = props.feedback;

  // const { feedback } = props;
  // console.log(feedback.data);

  // const icon = `data:image/jpeg;base64,${}`;

  // console.log(image);

  // console.log(photo);

  return (
    <div className="col-md-4 mb-3">
      <ReviewContainer>
        <div className="row mb-3">
          <div className="col-sm-3">
            <img src={image} className="w-75 rounded-circle" alt="" />
          </div>
          <div className="col-sm-9">
            <h4 className="font-weight-bold">{name}</h4>
            <h6>{position}</h6>
          </div>
        </div>
        <div>
          <p className="text-secondary">{review}</p>
        </div>
      </ReviewContainer>
    </div>
  );
}

export default Review;

const ReviewContainer = styled.div`
  padding: 15px 14px;
  border: 1px solid black;
`;
