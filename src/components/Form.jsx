import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#FFF',
        },
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(3, 0, 3),
        backgroundColor: '#000'
    },
});

class Form extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            poolEmail: 'samuel.eduardo.vicente@gmail.com',
            name: '',
            email: '',
            comments: ''
        }
    }

    handleChangeInput = (e) => {
        console.log(e)
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = () => {
        console.log(this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <Container id='contactSection' maxWidth="xs">
                <h1>Contact</h1>
                <h1 className="hr" >{}</h1>
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    inputProps={{ maxLength: 70 }}
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    value={this.state.name}
                                    onChange={this.handleChangeInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    onChange={this.handleChangeInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    inputProps={{ maxLength: 600 }}
                                    multiline
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="comments"
                                    label="Comments"
                                    id="comments"
                                    autoComplete="comments"
                                    rows="4"
                                    value={this.state.comments}
                                    onChange={this.handleChangeInput}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            size="large"
                            component="a"
                            href={`mailto:${this.state.poolEmail}?subject=${this.state.name + ': Software Development'}&body=${this.state.comments}`}
                            value={this.comments}
                            onClick={() => this.onSubmit()}
                        >
                            Submit
        </Button>
                    </form>
                </div>
            </Container>)
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Form)
