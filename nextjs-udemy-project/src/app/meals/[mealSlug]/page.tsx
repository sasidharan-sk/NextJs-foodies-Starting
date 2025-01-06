
type MealItemProps = {
    params: {
        slug: string;
      };
}

const MealItems = ({params} : MealItemProps) => {
    return(
        <>
        <h1>This is the Meal Items</h1>
        <p>{params.slug}</p>
        </>
    );
}

export default MealItems