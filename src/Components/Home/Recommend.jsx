import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { entActions } from "../Store/ent-slice";
import Card from "../UI/Card";
import classes from "./Recommend.module.css";

const Recommend = () => {
  const ent = useSelector((state) => state.ent.items);
  const rec = useSelector((state) => state.ent.recommened);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(entActions.filterRec());
  }, [ent, dispatch]);
  console.log(rec);

  return (
    <div className={classes.grid}>
      {rec.map((item, index) => {
        return (
          <Card
            key={index}
            type={item.category}
            title={item.title}
            year={item.year}
            rating={item.rating}
            background={item.thumbnail.regular.large}
          />
        );
      })}
    </div>
  );
};

export default Recommend;
