import { useRouter } from "next/router";

import Link from "next/link";
import Image from 'next/image'
import { Icon, Divider, Button, Form, Input } from "semantic-ui-react";

import * as commonUtil from "/src/components/Common";



export default function Login() {

    const router = useRouter();
    const login = async () => {
        let user_id = document.getElementById("user_id").value;
        let passwd = document.getElementById("passwd").value;

        user_id = commonUtil.removeStrSpace(user_id);
        passwd = commonUtil.removeStrSpace(passwd);

        if (!user_id) {
            alert("사번을 입력해 주세요");
            document.getElementById("user_id").value = "";
            document.getElementById("user_id").focus();
            return;
        }

        if (!passwd) {
            alert("password를 입력해 주세요 ");
            document.getElementById("passwd").value = "";
            document.getElementById("passwd").focus();
            return;
        }

        let response = {};
        try {

            // const userIp = await backendAPI.getClientIpCall();
            // response = await backendAPI.postAdminLoginCall(user_id, passwd, userIp);
            // console.log(response);
            response.status = 200;

            if (response.status === 200) {

                // console.log(JSON.stringify(response))
                localStorage.setItem("LOGIN_FAIL_CNT", 1);

                sessionStorage.setItem("USER_ID", "11111");
                sessionStorage.setItem("USER_NAME", "홍길동");
                sessionStorage.setItem("USER_DEPARTMENT", "개발팀");
                sessionStorage.setItem("API_TOKEN", "tokenvalue");
                // sessionStorage.setItem("USER_ID", response.data.user_id);
                // sessionStorage.setItem("USER_NAME", response.data.user_info.userName);
                // sessionStorage.setItem("USER_DEPARTMENT", response.data.user_info.department);
                // sessionStorage.setItem("API_TOKEN", response.data.api_token);
                router.push("/main");

            } else {

                if (localStorage.getItem("LOGIN_FAIL_CNT") > 4) {
                    alert(`5회 이상 로그인 실패하여 로그인할 수 없습니다.\n다시 로그인이 가능하려면 담당자(snuna@emart.com)에게 연락해 주시길 바랍니다`);
                } else {
                    let loginFailCnt = commonUtil.isEmpty(localStorage.getItem("LOGIN_FAIL_CNT")) ? 1 : Number(localStorage.getItem("LOGIN_FAIL_CNT"));
                    localStorage.setItem("LOGIN_FAIL_CNT", loginFailCnt + 1);

                    alert(`로그인 ${loginFailCnt}회 실패하였습니다.\n5회 연속 실패할 경우 로그인 계정이 잠기게 되므로 정확히 입력해 주시길 바랍니다`);
                    document.getElementById("user_id").value = "";
                    document.getElementById("passwd").value = "";
                    document.getElementById("user_id").focus();
                }
                router.push("/login");
            }

        } catch (e) {
            console.error(e);
            document.getElementById("user_id").value = "";
            document.getElementById("passwd").value = "";
            document.getElementById("user_id").focus();
            alert("로그인 실패하였습니다.");
        }
    }

    function reset() {
        document.querySelector("#user_id").value = "";
        document.querySelector("#passwd").value = "";
        document.getElementById("user_id").focus();
    }


    return (
        <>
            <div style={{
                padding: "200px 0", textAlign: "center", backgroundColor: "#EFF4F6"
            }}>

                <Form>
                    <Form.Field inline style={{ paddingBottom: "20px" }}>
                        <div style={{
                            fontSize: "50px",
                            height: "100px",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: "200px",
                            // border: "5px dashed grey",
                        }}>
                            [[ <font color="#fab601">P</font>roject <font color="#fab601"> T</font>itle ]]
                        </div>

                    </Form.Field>
                    <Form.Field inline>
                        <Input id="user_id" size="big" icon="user" placeholder="사번 입력.." maxLength="20" />
                    </Form.Field>
                    <Form.Field inline>
                        <Input type="password" id="passwd" size="big" icon="lock" placeholder="Password 입력.." maxLength="20" />
                    </Form.Field>
                    <Button color="blue" onClick={login} size="big">
                        Login
                    </Button>
                    <Button color="grey" onClick={reset} size="big">
                        Reset
                    </Button>
                    <Divider horizontal></Divider>

                    <Form.Field inline>
                        <div>
                            사용 권한이 부여된 이마트 임직원 사번으로 로그인 가능합니다.
                        </div>
                    </Form.Field>
                </Form>
            </div>
        </>
    )
}


Login.getInitialProps = async (ctx) => {
    const pathname = ctx.pathname;

    return { pathname };
};
