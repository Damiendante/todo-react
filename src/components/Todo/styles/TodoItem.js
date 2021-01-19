import { css } from '@emotion/core';

const TodoItemStyle = css`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr;
    border-bottom: 2px solid lightgrey;
    padding: 3rem 1rem;
    align-items: center;
    @media (min-width: 992px) {
        grid-template-columns: 1fr 8fr 4fr 1fr;
    }

    &.completed {
        opacity: 0.6;
        input,
        textarea {
            text-decoration: line-through;
        }
    }

    textarea {
        font-size: 1.2rem;
        border: none;
        font-family: sans-serif;
        resize: none;
        padding: 10px;
    }

    .datepicker--icon::after {
        opacity: 0.5;
        left: 2vw;
    }

    .form-control {
        padding-bottom: 0.1rem;
        position: relative;
        & input {
            border: 2px solid #f0f0f0;
            border-radius: 4px;
            display: block;
            width: 100%;
            padding: 10px;
            margin: 1rem 0;
            font-size: 1rem;
        }

        &.custom-inputs {
            label {
                display: inline-block;
                position: relative;
                padding: 15px 0px;
                margin-bottom: 12px;
                cursor: pointer;
                user-select: none;
            }

            label.list {
                display: block;
            }

            label input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }

            .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: #eee;
            }

            label input:checked ~ .checkmark {
                background-color: var(--accent);
            }

            .checkmark:after {
                content: '';
                position: absolute;
                display: none;
            }

            label input:checked ~ .checkmark:after {
                display: block;
            }

            label .checkmark:after {
                left: 10px;
                top: 5px;
                width: 6px;
                height: 13px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }
        }
    }
`;

export default TodoItemStyle;
