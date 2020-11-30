import React from 'react';

const Form = (props) => {
    return(
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <form onSubmit={props.onSubmitHandler}>
                        <div className="form-group">
                            <label>Pet Name</label>
                            <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name} />
                            {
                                props.error.name ? 
                                    <span className="text-danger">{props.error.name.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Pet Type</label>
                            <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type} />
                            {
                                props.error.type ? 
                                    <span className="text-danger">{props.error.type.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description} />
                            {
                                props.error.description ? 
                                    <span className="text-danger">{props.error.description.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Skill 1 (optional)</label>
                            <input type="text" name="skill1" className="form-control" onChange={props.onChangeHandler} value={props.form.skill1} />
                            {
                                props.error.skill1 ? 
                                    <span className="text-danger">{props.error.skill1.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Skill 2:</label>
                            <input type="text" name="skill2" className="form-control" onChange={props.onChangeHandler} value={props.form.skill2} />
                            {
                                props.error.skill2 ? 
                                    <span className="text-danger">{props.error.skill2.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Skill 3</label>
                            <input type="text" name="skill3" className="form-control" onChange={props.onChangeHandler} value={props.form.skill3} />
                            {
                                props.error.skill3 ? 
                                    <span className="text-danger">{props.error.skill3.message}</span>
                                    : ""
                            }
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}
export default Form; 