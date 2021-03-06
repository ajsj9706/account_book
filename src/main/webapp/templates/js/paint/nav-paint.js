let navPaint =
`<nav id="nav" class="nav_wrapper">
    <div class="nav_container">
        <div class="nav_list nav_line">
            <ul>
                <li class="list_target" onclick="location.href='write.html'">
                    <div class="list_content">
                        <img class="list_icon" src="image/write_icon.png" alt="list_icon" />
                        <p class="list_text font">쓰기</p>
                    </div>
                </li>
                <li class="list_target" style="padding-left: 9px;" onclick="location.href='report.html'">
                    <div class="list_content">
                        <img class="list_icon" src="image/report_icon.png" alt="list_icon" />
                        <p class="list_text font">보고서</p>
                    </div>
                </li>
                <li class="list_target" onclick="location.href='budget.html'">
                    <div class="list_content">
                        <img class="list_icon" src="image/budget_icon.png" alt="list_icon" />
                        <p class="list_text font">예산쓰기</p>
                    </div>
                </li>
                <li class="list_target" onclick="location.href='story.html'">
                    <div class="list_content">
                        <img class="list_icon" src="image/hope_icon.png" alt="list_icon" />
                        <p class="list_text font">희망목표/이야기</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="nav_frame nav_line">
            <div class="nav_content">
                <img id="month_target" class="arrow_target" src="image/arrow/arrow_down.png" alt="down" />
                <h3 class="month_text font">
                    이달의 가계
                    <p class="month_day font">
                        <span id="first_date"></span>
                        <span id="last_date"></span>
                    </p>
                </h3>
            </div>
            <ul class="month_money nav_space">
                <li class="income">
                    <span class="symbol font">+</span>
                    <span class="money_text font">수입</span>
                    <span class="money font">0</span>
                </li>
                <li class="sub_income">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">이달의 수입</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="sub_income">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">전월이월</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="spend font">
                    <span class="symbol minus font">-</span>
                    <span class="money_text font">지출</span>
                    <span class="money font">0</span>
                </li>
                <li class="sub_income">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">현금지출</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="sub_income">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">카드지출</span>
                    <span class="sub_money font">0</span>
                </li>
                <li>
                    <span class="symbol font">=</span>
                    <span class="money_text font">수입 - 지출</span>
                    <span class="money font">0</span>
                </li>
            </ul>
        </div>
        <div class="nav_frame nav_line">
            <div class="nav_content">
                <img id="spend_target" class="arrow_target" src="image/arrow/arrow_down.png" alt="down" />
                <h3 class="month_text font">
                    <span class="font">이달의 지출 분석</span>
                </h3>
            </div>
            <div class="percent_container nav_space">
                <div class="percent">
                    <div class="saving_percent"></div>
                    <div class="spend_percent"></div>
                    <span id="saving_text" class="saving_text font">0%</span>
                    <span id="spend_text" class="spend_text font">0%</span>
                </div>
                <div class="percent_label">
                    <div class="saving_color"></div>
                    <span class="font">저축/보험</span>
                    <div class="spend_color"></div>
                    <span class="font">소비지출</span>
                </div>
                <ul>
                    <li class="graph_space">
                        <div class="graph_ranking">
                            <div class="graph_div">
                                <div class="graph"></div>
                                <span class="graph_percent font">0%</span>
                                <span class="graph_text font">미분류</span>
                            </div>
                        </div>
                    </li>
                    <li class="graph_space">
                        <div class="graph_ranking">
                            <div class="graph_div">
                                <div class="graph"></div>
                                <span class="graph_percent font">0%</span>
                                <span class="graph_text font">미분류</span>
                            </div>
                        </div>
                    </li>
                    <li class="graph_space">
                        <div class="graph_ranking">
                            <div class="graph_div">
                                <div class="graph"></div>
                                <span class="graph_percent font">0%</span>
                                <span class="graph_text font">미분류</span>
                            </div>
                        </div>
                    </li>
                    <li class="graph_space">
                        <div class="graph_ranking">
                            <div class="graph_div">
                                <div class="graph"></div>
                                <span class="graph_percent font">0%</span>
                                <span class="graph_text font">미분류</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav_frame nav_line">
            <div class="nav_content">
                <img id="property_target" class="arrow_target" src="image/arrow/arrow_down.png" alt="down" />
                <h3 class="month_text font">
                    <span class="font">총누적자산</span>
                </h3>
            </div>
            <ul class="property_money nav_space">
                <li>
                    <span class="property_text font">자산합계</span>
                    <span class="money font">0</span>
                </li>
                <li class="property_sub_text">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">현금잔액</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="property_sub_text">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">예금</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="property_sub_text">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">적금</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="property_sub_text">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">펀드</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="property_sub_text">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">보험</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="property_sub_text">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">투자</span>
                    <span class="sub_money font">0</span>
                </li>
                <li class="property_sub_text">
                    <span class="month_arrow font">└</span>
                    <span class="money_text font">기타</span>
                    <span class="sub_money font">0</span>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

document.write(navPaint);