package com.xxxx.controller;

import com.xxxx.entity.User;
import com.xxxx.entity.vo.MessageModel;
import com.xxxx.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet("/login")
public class UserServlet extends HttpServlet {

    // 实例化UserService对象
    private UserService userService = new UserService();

    /**
     * 用户登录
         1. 接收客户端的请求（接收参数：姓名、密码）
         2. 调用service层的方法，返回消息模型对象
         3. 判断消息模型的状态码
             如果状态码是失败
                将消息模型对象设置到request作用域中，请求转发跳转到login.jsp
             如果状态码是成功
                将消息模型中的用户信息设置到session作用域中，重定向跳转到index.jsp
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 1. 接收客户端的请求（接收参数：姓名、密码）
        String uname = request.getParameter("uname");
        String upwd = request.getParameter("upwd");
        // 2. 调用service层的方法，返回消息模型对象
        MessageModel messageModel = userService.userLogin(uname,upwd);
        // 3. 判断消息模型的状态码
        if (messageModel.getCode() == 1 ) { // 成功
            // 将消息模型中的用户信息设置到session作用域中，重定向跳转到index.jsp
            request.getSession().setAttribute("user",messageModel.getObject());
            response.sendRedirect("index.jsp");
        } else { // 失败
            // 将消息模型对象设置到request作用域中，请求转发跳转到login.jsp
            request.setAttribute("messageModel",messageModel);
            request.getRequestDispatcher("login.jsp").forward(request,response);
        }
    }
}
