@extends('theme.default.pc.frame')

@section('pageTitleMain','绑定邮箱')

@section('bodyScript')
    <script src="@assets('assets/main/default/verify.js')"></script>
    <script>
        $(function () {
            new window.api.commonVerify({
                generateServer: '/member/profile_email_verify',
                selectorTarget: 'input[name=email]',
                selectorGenerate: '[data-verify-generate]',
                selectorCountdown: '[data-verify-countdown]',
                selectorRegenerate: '[data-verify-regenerate]',
                selectorCaptcha: 'input[name=captcha]',
                selectorCaptchaImg:'img[data-captcha]',
                interval: 60,
            },window.api.dialog);
        });
    </script>
@endsection

@section('bodyContent')

    <div class="main-container">

        <div class="pb pb-breadcrumb">
            <ul class="uk-breadcrumb">
                <li><a href="/">首页</a></li>
                <li><a href="/member/{{$_memberUser['id']}}">我的中心</a></li>
                <li class="uk-active"><span>绑定邮箱</span></li>
            </ul>
        </div>

        <div class="uk-grid">
            <div class="uk-width-1-6">
                @include('theme.default.pc.member.profile.menu')
            </div>
            <div class="uk-width-5-6">

                <div class="pb ">

                    <div class="head">绑定邮箱</div>
                    <div class="content">

                        <form action="?" class="uk-form" method="post" data-ajax-form>

                            @if($_memberUser['email'] && $_memberUser['emailVerified'])
                                <div class="line">
                                    <div class="label">邮箱:</div>
                                    <div class="field">
                                        {{$_memberUser['email']}} <span class="uk-text-success">已验证</span>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="label">&nbsp;</div>
                                    <div class="field">
                                        <a href="javascript:;" onclick="$('[data-modify-box]').show();" class="uk-button">修改</a>
                                    </div>
                                </div>
                                <div data-modify-box style="display:none;">
                                    <div class="line">
                                        <div class="label">新邮箱:</div>
                                        <div class="field">
                                            <input type="text" name="email" class="uk-width-2-5" value="" />
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="label">图形验证码：</div>
                                        <div class="field">
                                            <div class="uk-grid" style="width:400px;">
                                                <div class="uk-width-1-3">
                                                    <img data-captcha src="/member/profile_captcha" style="height:30px;border:1px solid #CCC;border-radius:3px;cursor:pointer;" alt="刷新验证码" onclick="this.src='/member/profile_captcha?'+Math.random();"/>
                                                </div>
                                                <div class="uk-width-1-3">
                                                    <input type="text" name="captcha" class="uk-width-1-1" />
                                                </div>
                                                <div class="uk-width-1-3">
                                                    <button class="uk-button uk-button-default" type="button" data-verify-generate>获取验证码</button>
                                                    <button class="uk-button uk-button-default uk-disabled" type="button" data-verify-countdown style="display:none;"></button>
                                                    <button class="uk-button uk-button-default" type="button" data-verify-regenerate style="display:none;">重新获取</button>
                                                </div>
                                            </div>
                                            <div class="help">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="label">邮箱验证码：</div>
                                        <div class="field">
                                            <input type="text" name="verify" />
                                            <div class="help">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="label">&nbsp;</div>
                                        <div class="field">
                                            <button type="submit" class="uk-button uk-button-primary">提交</button>
                                        </div>
                                    </div>
                                </div>
                            @else
                                @if($_memberUser['email'])
                                    <div class="line">
                                        <div class="uk-alert uk-alert-danger">
                                            邮箱还没有进行验证
                                        </div>
                                    </div>
                                @endif
                                <div class="line">
                                    <div class="label">邮箱:</div>
                                    <div class="field">
                                        <input type="text" name="email" class="uk-width-2-5" value="{{$_memberUser['email'] or ''}}" />
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="label">图形验证码：</div>
                                    <div class="field">
                                        <div class="uk-grid" style="width:400px;">
                                            <div class="uk-width-1-3">
                                                <img data-captcha src="/member/profile_captcha" style="height:30px;border:1px solid #CCC;border-radius:3px;cursor:pointer;" alt="刷新验证码" onclick="this.src='/member/profile_captcha?'+Math.random();"/>
                                            </div>
                                            <div class="uk-width-1-3">
                                                <input type="text" name="captcha" class="uk-width-1-1" />
                                            </div>
                                            <div class="uk-width-1-3">
                                                <button class="uk-button uk-button-default" type="button" data-verify-generate>获取验证码</button>
                                                <button class="uk-button uk-button-default uk-disabled" type="button" data-verify-countdown style="display:none;"></button>
                                                <button class="uk-button uk-button-default" type="button" data-verify-regenerate style="display:none;">重新获取</button>
                                            </div>
                                        </div>
                                        <div class="help">
                                        </div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="label">邮箱验证码：</div>
                                    <div class="field">
                                        <input type="text" name="verify" />
                                        <div class="help">
                                        </div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="label">&nbsp;</div>
                                    <div class="field">
                                        <button type="submit" class="uk-button uk-button-primary">提交</button>
                                    </div>
                                </div>
                            @endif
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </div>

@endsection